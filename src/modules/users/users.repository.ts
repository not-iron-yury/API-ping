// слой доступа к базе
import { pool } from '../../DB/client';

type NewUser = {
  name: string;
  email: string;
};

export const createUser = async ({ name, email }: NewUser) => {
  const result = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [
    name,
    email,
  ]);
  return result.rows[0];
};

export const getUserById = async (id: number) => {
  const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
  return result.rows[0] || null;
};

export const getAllUsers = async () => {
  const result = await pool.query('SELECT * FROM users ORDER BY id');
  return result.rows;
};
