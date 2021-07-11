import { DatabaseModule } from './../database.module';
import { categoryProviders } from './category.providers';
import { Test, TestingModule } from '@nestjs/testing';
import { CategoryService } from './category.service';

describe('CategoryService', () => {
  let service: CategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [...categoryProviders,CategoryService],
      imports:[DatabaseModule]
    }).compile();

    service = module.get<CategoryService>(CategoryService);
  },30000);

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
