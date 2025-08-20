export interface IDataSource<Model, CreateDto, UpdateDto> {
  getAll(): Promise<Model[]>;
  getById(id: number): Promise<Model | null>;
  create(data: CreateDto): Promise<Model>;
  update(id: number, data: UpdateDto): Promise<Model | null>;
  remove(id: number): Promise<boolean>;
}
