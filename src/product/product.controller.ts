import { Controller, Get, Post, Body, Put, Param, Delete, HttpCode, BadRequestException, NotFoundException } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { NOTFOUND } from 'dns';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll() : Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: number) {
    const product : Product = await this.productService.findOne(+id)
    if(!product){
      throw new NotFoundException('Product not found ');
    }
    return product
    
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return this.productService.remove(+id);
  }
}
