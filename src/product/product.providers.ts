import { DATABASE_CONNECTION } from "src/database.providers";
import { Connection,Repository } from "typeorm";
import { Product } from "./entities/product.entity";

export const PRODUCT_REPOSITORY = "PRODUCT_REPOSITORY"
export const productProviders = [
  {
    provide: PRODUCT_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(Product),
    inject: [DATABASE_CONNECTION],
  },
]
