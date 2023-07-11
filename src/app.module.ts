import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { GlobalModule } from './global/global.module';
import { DbConfig } from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [DbConfig],
    }),
    UsersModule,
    GlobalModule,
  ],
})
export class AppModule {}
