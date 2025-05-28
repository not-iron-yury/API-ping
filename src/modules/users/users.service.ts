import type { User, UserUpdate } from './users.schema';
import * as repo from './users.repository';

export const createUser = async (user: Omit<User, 'id'>): Promise<User> => {
  const { name, email } = user;
  return (await repo.createUser(name, email)) as User;
};

export const getAllUsers = async (): Promise<User[]> => {
  const rows = await repo.getAllUsers();
  return rows.map((row) => row as User);
};

export const getUserById = async (id: number): Promise<User | null> => {
  return (await repo.getUserById(id)) as User;
};

export const addUser = (name: string, email: string) => {
  return repo.createUser(name, email);
};

export const findUser = (id: number) => {
  return repo.getUserById(id);
};

export const listUsers = () => {
  return repo.getAllUsers();
};

export const deleteUser = (id: number): Promise<boolean> => {
  return repo.deleteUserById(id);
};

export const updateUser = async (id: number, data: UserUpdate): Promise<User | null> => {
  return repo.updateUserById(id, data);
};
