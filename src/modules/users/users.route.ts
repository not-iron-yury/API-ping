import { Router } from 'express';
import { createUserController } from './users.controller';
import { getAllUsersController } from './users.controller';
import { validateCreateUser, validateUserId } from './users.middleware';
import { getUserByIdController } from './users.controller';
import { deleteUserController } from './users.controller';
import { updateUserController } from './users.controller';
import { validateUpdateUser } from './users.middleware';

export const usersRouter = Router();

usersRouter.post('/', validateCreateUser, createUserController);
usersRouter.get('/', getAllUsersController);
usersRouter.get('/:id', validateUserId, getUserByIdController);
usersRouter.delete('/:id', validateUserId, deleteUserController);
usersRouter.patch('/:id', validateUserId, validateUpdateUser, updateUserController);
