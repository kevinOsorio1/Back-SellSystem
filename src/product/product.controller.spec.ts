import { DatabaseModule } from './../database.module';
import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { productProviders } from './product.providers';
import { ProductService } from './product.service';

describe('ProductController', () => {
  let controller: ProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[DatabaseModule],
      controllers: [ProductController],
      providers: [...productProviders,ProductService],
    }).compile();

    controller = module.get<ProductController>(ProductController);
  },30000);

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
