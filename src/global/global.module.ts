import { Global, Module } from '@nestjs/common';
import { DbProvider } from '@/global/providers/db.provider';
import { DB_CONNECTION } from '@/constants';

@Global()
@Module({
  providers: [DbProvider],
  exports: [DB_CONNECTION],
})
export class GlobalModule {}
