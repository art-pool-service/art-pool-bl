export interface CreateDeviceDto {
  name: string;
  type: string;
  status: string;
}

export interface UpdateDeviceDto {
  name?: string;
  type?: string;
  status?: string;
}
