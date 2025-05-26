import { Router } from 'express';
import { echoController } from '../controllers/echo.controller';
import { validateMessageMiddleware } from '../middlewares/validateEcho.middleware';

export const echoRouter = Router();

echoRouter.post('/', validateMessageMiddleware, echoController);
