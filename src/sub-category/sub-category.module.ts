import { DatabaseModule } from './../database.module';
import { subCategoryProviders } from './sub-category.providers';
import { Module } from '@nestjs/common';
import { SubCategoryService } from './sub-category.service';
import { SubCategoryController } from './sub-category.controller';

@Module({
  imports:[DatabaseModule],
  controllers: [SubCategoryController],
  providers: [...subCategoryProviders,SubCategoryService]
})
export class SubCategoryModule {}
