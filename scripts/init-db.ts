import { readFile } from 'fs/promises';
import { sql } from '../src/db';

const run = async () => {
  const query = await readFile('./sql/create_users_table.sql', 'utf8');
  await sql.unsafe(query);
  console.log('Таблица users создана (если не существовала).');
  process.exit(0);
};

run().catch((err) => {
  console.error('Ошибка при инициализации базы:', err);
  process.exit(1);
});
