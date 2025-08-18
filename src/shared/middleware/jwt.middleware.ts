import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET: string = process.env.JWT_SECRET ?? 'dev_secret';

export function jwtMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const payload = jwt.verify(token!, JWT_SECRET);
    if (typeof payload === 'object' && payload !== null && 'userId' in payload && 'phone' in payload) {
      (req as any).user = payload;
      next();
    } else {
      return res.status(401).json({ message: 'Invalid token payload' });
    }
  } catch {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
}
