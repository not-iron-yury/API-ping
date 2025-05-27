import { Request, Response } from 'express';
import { createUser } from './users.service';
import { getAllUsers } from './users.service';
import { getUserById } from './users.service';
import { deleteUser } from './users.service';

// --------------------  createUser -------------------- //
export const createUserController = async (req: Request, res: Response) => {
  const user = req.body;

  const newUser = await createUser(user);

  res.status(201).json({ user: newUser });
};

// --------------------  getAllUsers -------------------- //
export const getAllUsersController = async (_req: Request, res: Response) => {
  const users = await getAllUsers();

  res.status(200).json({ users });
};

// --------------------  getUserById -------------------- //
export const getUserByIdController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const user = await getUserById(id);

  if (!user) {
    res.status(404).json({ error: 'Пользователь не найден' });
    return;
  }

  res.status(200).json({ user });
};

// --------------------  deleteUser -------------------- //
export const deleteUserController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    res.status(400).json({ error: 'Некорректный ID' });
    return;
  }

  const deleted = await deleteUser(id);
  if (!deleted) {
    res.status(404).json({ error: 'Пользователь не найден' });
    return;
  }

  res.status(204).send(); // Успешно, без тела
};
