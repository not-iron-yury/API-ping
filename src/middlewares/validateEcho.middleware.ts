import { Request, Response, NextFunction } from 'express';

export const validateEcho = (req: Request, res: Response, next: NextFunction) => {
  const { message } = req.body;

  if (message === undefined || typeof message !== 'string' || !message.trim()) {
    res.status(400).json({ error: 'Поле "message" обязательно и должно быть строкой.' });
    return;
  }

  next();
};
