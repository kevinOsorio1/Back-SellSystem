import { DatabaseModule } from './../database.module';
import { Test, TestingModule } from '@nestjs/testing';
import { subCategoryProviders } from './sub-category.providers';
import { SubCategoryService } from './sub-category.service';

describe('SubCategoryService', () => {
  let service: SubCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [...subCategoryProviders,SubCategoryService],
      imports:[DatabaseModule]
    }).compile();

    service = module.get<SubCategoryService>(SubCategoryService);
  },30000);

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
