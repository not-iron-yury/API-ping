import { z } from 'zod';

export const echoSchema = z.object({
  message: z
    .string()
    .transform((str) => str.trim())
    .refine((str) => str.length > 0, {
      message: "Поле 'message' обязательно и должно быть непустой строкой",
    }),
});

export type EchoInput = z.infer<typeof echoSchema>;
