import express from 'express';
import { pingRouter } from './routes/ping.route';
import { echoRouter } from './routes/echo.route';
import { errorMiddleware } from './common/middlewares/error.middleware';
import type { ErrorRequestHandler } from 'express';

export const app = express();

app.use(express.json());
app.use('/ping', pingRouter);
app.use('/echo', echoRouter);
app.use(errorMiddleware as ErrorRequestHandler);
