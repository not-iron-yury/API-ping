import { readFileSync } from 'fs';
import path from 'path';
import { db } from '../src/db';

async function initDB() {
  const sql = readFileSync(path.join(__dirname, '../sql/create_users_table.sql'), 'utf-8');

  try {
    await db.query(sql);
    console.log('Users table created');
  } catch (err) {
    console.error('Error initializing database', err);
  } finally {
    await db.end();
  }
}

initDB();
