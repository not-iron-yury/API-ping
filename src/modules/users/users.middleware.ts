import { Request, Response, NextFunction } from 'express';
import { createUserSchema } from './users.schema';

export const validateCreateUser = (req: Request, res: Response, next: NextFunction) => {
  const result = createUserSchema.safeParse(req.body);

  if (!result.success) {
    const errorMessage = result.error.errors[0]?.message || 'Validation error';
    res.status(400).json({ error: errorMessage });
    return;
  }

  next();
};
