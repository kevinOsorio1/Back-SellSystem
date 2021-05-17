import { Category } from 'src/category/entities/category.entity';
import { DATABASE_CONNECTION } from "../database.providers";
import { Connection,Repository } from "typeorm";

export const CATEGORY_REPOSITORY = "CATEGORY_REPOSITORY"
export const categoryProviders = [
  {
    provide: CATEGORY_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(Category),
    inject: [DATABASE_CONNECTION],
  },
]