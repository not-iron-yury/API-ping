import { Request, Response, NextFunction } from 'express';
import { createUserSchema, userIdSchema, userUpdateSchema } from './users.schema';

export const validateCreateUser = (req: Request, res: Response, next: NextFunction) => {
  const result = createUserSchema.safeParse(req.body);

  if (!result.success) {
    const errorMessage = result.error.errors[0]?.message || 'Validation error';
    res.status(400).json({ error: errorMessage });
    return;
  }

  next();
};

export const validateUserId = (req: Request, res: Response, next: NextFunction) => {
  const parseResult = userIdSchema.safeParse(req.params);

  if (!parseResult.success) {
    res.status(400).json({ error: 'Invalid user ID' });
    return;
  }

  next();
};

export const validateUpdateUser = (req: Request, res: Response, next: NextFunction) => {
  const result = userUpdateSchema.safeParse(req.body);

  if (!result.success) {
    const errorMessage = result.error.errors[0]?.message || 'Validation error';
    res.status(400).json({ error: errorMessage });
    return;
  }

  next();
};
