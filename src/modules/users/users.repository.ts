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

// export const getAllUsers = async (): Promise<User[]> => {
//   const result = await sql`
//     SELECT id, name, email
//     FROM users
//   `;

//   return z.array(userSchema).parse(result);
// };

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

console.log('USING DATABASE:', process.env.DATABASE_URL);
