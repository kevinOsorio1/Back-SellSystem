import { Category } from "src/category/entities/category.entity";
import { SubCategory } from "src/sub-category/entities/sub-category.entity";

export class CreateProductDto {
  name: string;
  serial_number: number;
  sku: string;
  price: number;
  discount: number;
  photo: string;
  category: Category;
  subCategory: SubCategory;
}
