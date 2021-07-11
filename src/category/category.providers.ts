import { Category } from './entities/category.entity';
import { Connection } from 'typeorm';

export const CATEGORY_REPOSITORY = "CATEGORY_REPOSITORY"
export const categoryProviders = [
  {
    provide: CATEGORY_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(Category),
    inject: ["DATABASE_CONNECTION"],
  },
]