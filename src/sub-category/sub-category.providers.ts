import { DATABASE_CONNECTION } from './../database.providers';
import { SubCategory } from './entities/sub-category.entity';
import { Connection } from 'typeorm';

export const SUBCATEGORY_REPOSITORY = "SUBCATEGORY_REPOSITORY"
export const subCategoryProviders = [
  {
    provide: SUBCATEGORY_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(SubCategory),
    inject: [DATABASE_CONNECTION],
  },
]