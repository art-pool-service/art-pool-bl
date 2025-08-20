export type CreateUserDto = {
  name: string;
  phone: string;
  hashedPassword: string;
  personId: number;
  roleId: number;
}

export type UpdateUserDto = Partial<CreateUserDto>;