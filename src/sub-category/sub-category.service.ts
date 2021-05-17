import { getRepository, Repository } from 'typeorm';
import { SUBCATEGORY_REPOSITORY } from './sub-category.providers';
import { Inject, Injectable } from '@nestjs/common';
import { CreateSubCategoryDto } from './dto/create-sub-category.dto';
import { UpdateSubCategoryDto } from './dto/update-sub-category.dto';
import { SubCategory } from './entities/sub-category.entity';
import { Product } from 'src/product/entities/product.entity';

@Injectable()
export class SubCategoryService {
  constructor(
    @Inject(SUBCATEGORY_REPOSITORY) 
    private subCategoryRepository: Repository<SubCategory>
    ){}

  create(createSubCategoryDto: CreateSubCategoryDto) {
    return this.subCategoryRepository.save(createSubCategoryDto);
  }

  async findAll(): Promise<SubCategory[]> {
    return this.subCategoryRepository.find();
  }

  async findOne(id: number): Promise<SubCategory> {
    return this.subCategoryRepository.findOne(id);
  }

  update(id: number, updateSubCategoryDto: UpdateSubCategoryDto) {
    return this.subCategoryRepository.update(id,updateSubCategoryDto);
  }

  remove(id: number) {
    return this.subCategoryRepository.delete(id);
  }

   async findProducts(id:number):Promise<Product[]> {
    return getRepository(Product).createQueryBuilder("product").where("product.subCategoryId= :id",{id:id}).getMany();
  }
}
