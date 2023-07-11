import { FactoryProvider, Logger } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { DB_CONNECTION } from '@/constants';
import { DefaultLogger, LogWriter } from 'drizzle-orm';
import { drizzle, MySql2Database } from 'drizzle-orm/mysql2';
import * as mysql from 'mysql2/promise';
import { DbConfig } from '@/config';

export type DbType = MySql2Database;

export const DbProvider: FactoryProvider = {
  provide: DB_CONNECTION,
  inject: [DbConfig.KEY],
  useFactory: (configService:  ConfigType<typeof DbConfig>) => {
    const logger = new Logger('DB');
    logger.debug('Connecting to the database..');
    const connection = mysql.createPool({
      uri: configService.dbURL,
      multipleStatements: true,
      waitForConnections: true,
      connectionLimit: 10,
      maxIdle: 10,
      idleTimeout: 60000,
      queueLimit: 0,
      enableKeepAlive: true,
      keepAliveInitialDelay: 0,
    });

    logger.debug('Connected to database!');

    class CustomDbLogWriter implements LogWriter {
      write(message: string) {
        logger.verbose(message);
      }
    }

    return drizzle(connection, {
      logger: new DefaultLogger({ writer: new CustomDbLogWriter() }),
    });
  },
};
