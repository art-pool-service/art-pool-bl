export type CreateUserDto = {
  name: string;
  phone: string;
  hashedPassword: string;
}

export type UpdateUserDto = Partial<CreateUserDto>;