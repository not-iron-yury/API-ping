import { z } from 'zod';

// types
export type User = z.infer<typeof userSchema>;
export type UserUpdate = z.infer<typeof userUpdateSchema>;

// schemas
export const createUserSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
});

export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
});

export const userUpdateSchema = createUserSchema.partial();

export const userIdSchema = z.object({
  id: z.coerce.number().int().positive(),
});
