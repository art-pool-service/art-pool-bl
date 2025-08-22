export interface LoginDto {
  phone: string;
  password: string;
}

export interface RegisterDto {
  phone: string;
  password: string;
  firstName: string;
  middleName: string;
  lastName: string;
}
