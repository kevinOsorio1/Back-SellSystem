import { SubCategory } from "./../../sub-category/entities/sub-category.entity"
import { Category } from "./../../category/entities/category.entity"
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm"

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column()
  serial_number: number

  @Column()
  sku: string;

  @Column()
  price: number;

  @Column()
  discount: number;

  @Column()
  photo: string;

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;

  @ManyToOne(() => SubCategory, (subcategory) => subcategory.products)
  subCategory: SubCategory;
}
