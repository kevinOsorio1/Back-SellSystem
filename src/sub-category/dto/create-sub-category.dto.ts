import { Category } from "src/category/entities/category.entity";
import { Product } from "src/product/entities/product.entity";

export class CreateSubCategoryDto {
  name: string;
  category: Category;
  products: Product[];
}
