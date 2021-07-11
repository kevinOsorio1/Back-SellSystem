import { DatabaseModule } from './../database.module';
import { CategoryService } from './category.service';
import { categoryProviders } from './category.providers';
import { CategoryController } from './category.controller';
import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';


@Module({
  imports:[DatabaseModule],
  controllers: [CategoryController],
  providers: [...categoryProviders,CategoryService]
})
export class CategoryModule {}
