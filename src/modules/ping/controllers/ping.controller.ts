import type { Request, Response } from 'express';
import { PingService } from '../services/ping.service';

const pingService = new PingService();

export const pingController = (_req: Request, res: Response) => {
  const result = pingService.getPingMessage();
  res.json(result);
};
