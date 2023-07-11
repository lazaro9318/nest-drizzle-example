import { InferModel } from "drizzle-orm";
import { mysqlTable, serial, timestamp, varchar } from "drizzle-orm/mysql-core";

export const users = mysqlTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }).notNull(),
  surname: varchar('surname', { length: 256 }).notNull(),
  companyName: varchar('company_name', { length: 256 }).notNull(),
  email: varchar('email', { length: 256 }).notNull(),
  phoneNumber: varchar('phone_number', { length: 256 }).notNull(),
  message: varchar("message", {length: 256 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export type User = InferModel<typeof users>; // return type when queried
export type NewUser = InferModel<typeof users, 'insert'>; // insert type
