import { Request, Response } from 'express';
import { createUser } from './users.service';
import { getAllUsers } from './users.service';
import { getUserById } from './users.service';
import { deleteUser } from './users.service';

// --------------------  createUser -------------------- //
export const createUserController = (req: Request, res: Response) => {
  const { name, email } = req.body;

  const newUser = createUser(name, email);

  res.status(201).json({ user: newUser });
};

// --------------------  getAllUsers -------------------- //
export const getAllUsersController = (_req: Request, res: Response) => {
  const users = getAllUsers();

  res.status(200).json({ users });
};

// --------------------  getUserById -------------------- //
export const getUserByIdController = (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const user = getUserById(id);

  if (!user) {
    res.status(404).json({ error: 'Пользователь не найден' });
    return;
  }

  res.status(200).json({ user });
};

// --------------------  deleteUser -------------------- //
export const deleteUserController = (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    res.status(400).json({ error: 'Некорректный ID' });
    return;
  }

  const deleted = deleteUser(id);
  if (!deleted) {
    res.status(404).json({ error: 'Пользователь не найден' });
    return;
  }

  res.status(204).send(); // Успешно, без тела
};
