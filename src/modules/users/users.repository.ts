// слой доступа к базе
import { sql } from '../../db';
import { userSchema, User } from './users.schema';
import { z } from 'zod';

export const createUser = async (name: string, email: string) => {
  const result = await sql`
    INSERT INTO users (name, email)
    VALUES (${name}, ${email})
    RETURNING id, name, email
  `;
  return userSchema.parse(result[0]);
};

export const getUserById = async (id: number): Promise<User | null> => {
  const result = await sql`
    SELECT id, name, email
    FROM users
    WHERE id = ${id}
  `;

  if (!result.length) return null;
  return userSchema.parse(result[0]);
};

export const getAllUsers = async () => {
  const result = await sql`
    SELECT id, name, email FROM users
  `;
  return result;
};

export const deleteUserById = async (id: unknown): Promise<boolean> => {
  const idSchema = z.number().int().positive();
  const validId = idSchema.parse(id); // выбросит исключение, если невалиден

  const result = await sql`
    DELETE FROM users
    WHERE id = ${validId}
  `;

  return result.count > 0;
};

export const updateUserById = async (id: number, data: Partial<User>) => {
  if (Object.keys(data).length === 0) return null;

  const assignments = Object.entries(data).map(([key, value]) => sql`${sql(key)} = ${value}`);

  const setClause = assignments.reduce((acc: any[], part, i) => {
    if (i > 0) acc.push(sql`, `);
    acc.push(part);
    return acc;
  }, []);

  const result = await sql`
    UPDATE users
    SET ${sql(setClause)}
    WHERE id = ${id}
    RETURNING id, name, email
  `;

  if (!result.length) return null;
  return userSchema.parse(result[0]);
};
