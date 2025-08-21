import { inject, injectable } from 'inversify';

import { Request, Response, NextFunction } from 'express';
import { AddressService } from '../services/address.service';

@injectable()
export class AddressController {
  constructor(@inject(AddressService) private addressService: AddressService) {
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.remove = this.remove.bind(this);
  }
  
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const addresss = await this.addressService.getAll();
      res.json(addresss);
    } catch (err) {
      next(err);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const address = await this.addressService.getById(Number(req.params.id));
      if (!address) return res.status(404).json({ message: 'Address not found' });
      res.json(address);
    } catch (err) {
      next(err);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const address = await this.addressService.create(req.body);
      res.status(201).json(address);
    } catch (err) {
      next(err);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const address = await this.addressService.update(Number(req.params.id), req.body);
      if (!address) return res.status(404).json({ message: 'Address not found' });
      res.json(address);
    } catch (err) {
      next(err);
    }
  }

  async remove(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.addressService.remove(Number(req.params.id));
      if (!result) return res.status(404).json({ message: 'Address not found' });
      res.json({ message: 'Address deleted' });
    } catch (err) {
      next(err);
    }
  }
}
