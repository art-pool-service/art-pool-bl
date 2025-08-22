import { inject, injectable } from "inversify";

import { Request, Response, NextFunction } from "express";
import { AuthService } from "../services/auth.service";

injectable();
export class AuthController {
  constructor(@inject(AuthService) private authService: AuthService) {}

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const token = await this.authService.login(req.body);
      if (!token)
        return res.status(401).json({ message: "Invalid credentials" });
      res.json({ token });
    } catch (err) {
      next(err);
    }
  }

  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await this.authService.register(req.body);
      res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  }
}
