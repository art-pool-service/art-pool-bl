export type CreatePersonDto = {
  firstName: string;
  middleName: string;
  lastName: string;
  addressId: number | null;
}

export type UpdatePersonDto = Partial<CreatePersonDto>;