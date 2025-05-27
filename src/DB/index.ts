import dotenv from 'dotenv';
dotenv.config();

import postgres from 'postgres';

export const sql = postgres(process.env.DATABASE_URL ?? '', {
  // здесь опции подключения, если нужно
  // ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});
