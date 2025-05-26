import { Request, Response } from 'express';

export const echoController = (req: Request, res: Response) => {
  const { message } = req.body;

  res.status(200).json({ echoed: message });
};
