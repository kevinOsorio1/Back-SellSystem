import { createConnection } from 'typeorm';

export const DATABASE_CONNECTION = 'DATABASE_CONNECTION';
export const databaseProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: async () => createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '*Parkour14',
      database: 'sellSystem',
      entities: [
          './**/**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    }),
  },
];