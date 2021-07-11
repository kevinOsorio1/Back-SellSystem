import { DatabaseModule } from './database.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { SubCategoryModule } from './sub-category/sub-category.module';
import { databaseProviders } from './database.providers';
import { ProductFieldsModule } from './product-fields/product-fields.module';

@Module({
  imports: [DatabaseModule,ProductModule, CategoryModule, SubCategoryModule, ProductFieldsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
