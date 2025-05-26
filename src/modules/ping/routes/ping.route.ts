import { Router } from 'express';
import { pingController } from '../controllers/ping.controller';
import { NotFoundError } from '../../../common/errors/not-found.error';

export const pingRouter = Router();

pingRouter.get('/', pingController);
pingRouter.get('/error', (_req, _res) => {
  throw new NotFoundError('Пинг-данные не найдены');
});
