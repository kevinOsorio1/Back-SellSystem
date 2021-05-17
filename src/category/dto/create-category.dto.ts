import { Product } from "src/product/entities/product.entity";
import { SubCategory } from "src/sub-category/entities/sub-category.entity";

export class CreateCategoryDto {
  name: string;
  products: Product[];
  subCategories: SubCategory[];
}
