import { DatabaseModule } from './../database.module';
import { INestApplication } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';
import {  getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { productProviders } from './product.providers';
describe('ProductService', () => {
  let service: ProductService;
  let repo: Repository<Product>;
  let module: TestingModule;
  let app: INestApplication

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: '*Parkour14',
          database: 'sellSysteme2etest',
          synchronize: true,
          entities: [
            './**/**/*.entity{.ts,.js}',
          ],
        }),
        TypeOrmModule.forFeature([Product]),
        DatabaseModule
      ],
      providers: [ProductService,...productProviders]
    }).compile();
    app = module.createNestApplication();
    service = module.get<ProductService>(ProductService);
    repo = module.get<Repository<Product>>(getRepositoryToken(Product));
  },30000);
  afterAll(async () => {
    await app.close();
  },30000);
  afterEach(async () => {
    await repo.query(`DELETE FROM product;`);
  },30000);


  describe("findAll",()=>{

    it('should return an array of products',async ()=>{
      await repo.save([
        { name: 'test-name-0',
        serial_number:123,
        discount: null,
        photo: null,
        price: null,
      },
        { name: 'test-name-1',serial_number:123,discount: null,
        photo: null,
        price: null,
      }
      ]);
      const result = await repo.find()
      expect(result).toEqual([
        { id: expect.any(Number), name: 'test-name-0',serial_number: 123,discount: null,
        photo: null,
        price: null,
        sku: null },
        { id: expect.any(Number), name: 'test-name-1',serial_number: 123,discount: null,
        photo: null,
        price: null, },
      ]);
    },30000)
  })

    it("should return a product",async () => {
      await repo.save([
        { name: 'test-name-0',serial_number: 123,discount: null,
        photo: null,
        price: null,},
        { name: 'test-name-1',serial_number: 123,discount: null,
        photo: null,
        price: null,},
      ]);
      const result = await repo.findOne(1)
      expect(result).toBe({id:1,name:'test-name-0',serial_number: 123,discount: null,
      photo: null,
      price: null,})
    },30000)

});
