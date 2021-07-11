import { createConnection } from 'typeorm';

export const DATABASE_CONNECTION = 'DATABASE_CONNECTION';
export const databaseProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: async () => {
      return  createConnection({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '*Parkour14',
        database: 'sellSystem',
        synchronize: true,
        entities: [
          './**/**/*.entity{.ts,.js}',
        ],
      });
    },
  },
];