import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { inject, injectable } from "inversify";

import { LoginDto, RegisterDto } from "../dto/auth.dto";
import { User } from "../../../database/models";
import { UserService } from "../../users/services/user.service";
import config from "../../../config/app.config";

const SALT_ROUNDS = 10;
const JWT_EXPIRES_IN = "1h";

injectable();
export class AuthService {
  constructor(@inject(UserService) private userService: UserService) {}

  async login(data: LoginDto): Promise<string | null> {
    const user = await this.userService.getByPhone(data.phone);
    if (!user || !(await bcrypt.compare(data.password, user.hashedPassword)))
      return null;

    return jwt.sign({ userId: user.id, phone: user.phone }, config.jwtSecret, {
      expiresIn: JWT_EXPIRES_IN,
    });
  }

  async register(data: RegisterDto): Promise<User | null> {
    const hashedPassword = await bcrypt.hash(data.password, SALT_ROUNDS);

    return await this.userService.create({
      phone: data.phone,
      hashedPassword: hashedPassword,
      person: {
        firstName: data.firstName,
        middleName: data.middleName,
        lastName: data.lastName,
        addressId: null,
      },
      roleId: 1,
    });
  }
}
