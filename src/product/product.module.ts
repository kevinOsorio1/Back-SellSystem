import { DatabaseModule } from './../database.module';
import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { productProviders } from './product.providers';

@Module({
  imports:[DatabaseModule],
  controllers: [ProductController],
  providers: [...productProviders, ProductService]
})
export class ProductModule {}
