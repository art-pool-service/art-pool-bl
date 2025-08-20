import { Request, Response, NextFunction } from 'express';
import { DeviceService } from '../services/device.service';

export const deviceController = (deviceService: DeviceService) => ({
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const devices = await deviceService.getAll();
      res.json(devices);
    } catch (err) {
      next(err);
    }
  },

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const device = await deviceService.getById(Number(req.params.id));
      if (!device) return res.status(404).json({ message: 'Device not found' });
      res.json(device);
    } catch (err) {
      next(err);
    }
  },

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const device = await deviceService.create(req.body);
      res.status(201).json(device);
    } catch (err) {
      next(err);
    }
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const device = await deviceService.update(Number(req.params.id), req.body);
      if (!device) return res.status(404).json({ message: 'Device not found' });
      res.json(device);
    } catch (err) {
      next(err);
    }
  },

  async remove(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await deviceService.remove(Number(req.params.id));
      if (!result) return res.status(404).json({ message: 'Device not found' });
      res.json({ message: 'Device deleted' });
    } catch (err) {
      next(err);
    }
  },
});
