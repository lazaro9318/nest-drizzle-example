import { Inject, Injectable } from '@nestjs/common';
import { users } from '@/db/schema/users';
import { DB_CONNECTION } from '@/constants';
import { MySql2Database } from 'drizzle-orm/mysql2';

@Injectable()
export class UsersService {
    constructor(@Inject(DB_CONNECTION) private conn: MySql2Database) {}
    
    async findAll() {
        try {
            return await this.conn.select().from(users)
        } catch (error) {
            console.error(error);
        }
    }
}
