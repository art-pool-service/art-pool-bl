export type CreateAddressDto = {
  city: string;
  street: string;
  building: string;
}

export type UpdateAddressDto = Partial<CreateAddressDto>;