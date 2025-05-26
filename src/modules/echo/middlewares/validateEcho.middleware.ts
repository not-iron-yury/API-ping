// import { Request, Response, NextFunction } from 'express';
// export const validateEcho = (req: Request, res: Response, next: NextFunction) => {
//   const { message } = req.body;
//   if (message === undefined || typeof message !== 'string' || !message.trim()) {
//     res.status(400).json({ error: 'Поле "message" обязательно и должно быть строкой.' });
//     return;
//   }
//   next();
// };

import { Request, Response, NextFunction } from 'express';
import { echoSchema } from '../validation/echo.schema';

export const validateMessageMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const result = echoSchema.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({ error: result.error.errors[0].message });
    return;
  }

  next();
};
