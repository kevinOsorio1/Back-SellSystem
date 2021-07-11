import { SubCategory } from "./../../sub-category/entities/sub-category.entity"
import { Category } from "./../../category/entities/category.entity"
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm"

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({nullable: true})
  serial_number: number

  @Column({nullable: true})
  sku: string;

  @Column({nullable: true})
  price?: number;

  @Column({nullable: true})
  discount?: number;

  @Column({nullable: true})
  photo?: string;

  @ManyToOne(() => Category, (category) => category.products,{nullable: true})
  category?: Category;

  @ManyToOne(() => SubCategory, (subcategory) => subcategory.products,{nullable: true})
  subCategory?: SubCategory;
}
