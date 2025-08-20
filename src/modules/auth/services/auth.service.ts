import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { authRepository } from '../repositories/auth.repository';
import { LoginDto, RegisterDto } from '../dto/auth.dto';
import { AuthPayload } from '../entities/auth.entity';
import { User } from '../../users/entities/user.entity';
import config from '../../../config/app.config';

const JWT_EXPIRES_IN = '1h';

export class AuthService {
  async login(data: LoginDto): Promise<string | null> {
    const user = await authRepository.findByPhone(data.phone);
    if (!user || !(await bcrypt.compare(data.password, user.hashedPassword))) return null;
  
    const payload: AuthPayload = { userId: user.id, phone: user.phone };
    return jwt.sign(payload, config.jwtSecret, { expiresIn: JWT_EXPIRES_IN });
  }

  async register(data: RegisterDto): Promise<User> {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(data.password, saltRounds);
  
    return authRepository.createUser({
      name: data.name,
      phone: data.phone,
      hashedPassword: hashedPassword,
    });
  }
}
