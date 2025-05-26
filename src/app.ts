import express from 'express';
import { pingRouter } from './modules/ping/routes/ping.route';
import { echoRouter } from './modules/echo/routes/echo.route';
import { usersRouter } from './modules/users/users.route';
import { errorMiddleware } from './common/middlewares/error.middleware';
import type { ErrorRequestHandler } from 'express';

export const app = express();

app.use(express.json());
app.use('/ping', pingRouter);
app.use('/echo', echoRouter);
app.use('/users', usersRouter);

app.use(errorMiddleware as ErrorRequestHandler);
