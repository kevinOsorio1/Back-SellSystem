import { categoryProviders } from './category.providers';
import { DatabaseModule } from './../database.module';
import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';

@Module({
  imports:[DatabaseModule],
  controllers: [CategoryController],
  providers: [...categoryProviders,CategoryService]
})
export class CategoryModule {}
