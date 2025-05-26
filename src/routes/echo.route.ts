import { Router } from 'express';
import { echoController } from '../controllers/echo.controller';
import { validateEcho } from '../middlewares/validateEcho.middleware';

export const echoRouter = Router();

echoRouter.post('/', validateEcho, echoController);
