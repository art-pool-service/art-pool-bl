import { CreatePersonDto } from "../../persons/dto/person.dto";

export type CreateUserDto = {
  phone: string;
  hashedPassword: string;
  person: { id: number } | CreatePersonDto;
  roleId: number;
}

export type UpdateUserDto = Partial<CreateUserDto>;