import { Request, Response, NextFunction } from 'express';
import { createUserSchema } from './users.schema';
import { z } from 'zod';

export const validateCreateUser = (req: Request, res: Response, next: NextFunction) => {
  const result = createUserSchema.safeParse(req.body);

  if (!result.success) {
    const errorMessage = result.error.errors[0]?.message || 'Validation error';
    res.status(400).json({ error: errorMessage });
    return;
  }

  next();
};

const userIdSchema = z.object({
  id: z.coerce.number().int().positive(), // автоматически преобразует строку "5" → 5
});

export const validateUserId = (req: Request, res: Response, next: NextFunction) => {
  const parseResult = userIdSchema.safeParse(req.params);

  if (!parseResult.success) {
    res.status(400).json({ error: 'Invalid user ID' });
    return;
  }

  next();
};
