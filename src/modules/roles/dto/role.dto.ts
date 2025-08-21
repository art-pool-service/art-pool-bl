export type CreateRoleDto = {
  name: string;
}

export type UpdateRoleDto = Partial<CreateRoleDto>;