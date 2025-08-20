import { Request, Response, NextFunction } from 'express';
import { RoleService } from '../services/role.service';

export class RoleController {
  constructor(private roleService: RoleService) {
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.remove = this.remove.bind(this);
  }
  
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const roles = await this.roleService.getAll();
      res.json(roles);
    } catch (err) {
      next(err);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const role = await this.roleService.getById(Number(req.params.id));
      if (!role) return res.status(404).json({ message: 'Role not found' });
      res.json(role);
    } catch (err) {
      next(err);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const role = await this.roleService.create(req.body);
      res.status(201).json(role);
    } catch (err) {
      next(err);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const role = await this.roleService.update(Number(req.params.id), req.body);
      if (!role) return res.status(404).json({ message: 'Role not found' });
      res.json(role);
    } catch (err) {
      next(err);
    }
  }

  async remove(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.roleService.remove(Number(req.params.id));
      if (!result) return res.status(404).json({ message: 'Role not found' });
      res.json({ message: 'Role deleted' });
    } catch (err) {
      next(err);
    }
  }
}
