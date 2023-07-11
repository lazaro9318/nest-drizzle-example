import { registerAs } from '@nestjs/config';

export const DbConfig = registerAs('db', () => ({
  dbURL: process.env.DATABASE_URL,
}));
