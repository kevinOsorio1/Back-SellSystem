import { DatabaseModule } from './../database.module';
import { SubCategory } from './entities/sub-category.entity';
import { SubCategoryService } from './sub-category.service';
import { subCategoryProviders } from './sub-category.providers';
import { SubCategoryController } from './sub-category.controller';
import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports:[DatabaseModule],
  controllers: [SubCategoryController],
  providers: [...subCategoryProviders,SubCategoryService]
})
export class SubCategoryModule {}
