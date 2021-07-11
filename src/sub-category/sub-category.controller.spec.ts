import { DatabaseModule } from './../database.module';
import { Test, TestingModule } from '@nestjs/testing';
import { SubCategoryController } from './sub-category.controller';
import { subCategoryProviders } from './sub-category.providers';
import { SubCategoryService } from './sub-category.service';

describe('SubCategoryController', () => {
  let controller: SubCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[DatabaseModule],
      controllers: [SubCategoryController],
      providers: [...subCategoryProviders,SubCategoryService],
    }).compile();

    controller = module.get<SubCategoryController>(SubCategoryController);
  },30000);

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
