import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateSubCategoryDto } from "./dto/create-sub-category.dto";
import { UpdateSubCategoryDto } from "./dto/update-sub-category.dto";
import { SubCategoryService } from "./sub-category.service";


@Controller('sub-category')
export class SubCategoryController {
  constructor(private readonly subCategoryService: SubCategoryService) {}

  @Post()
  create(@Body() createSubCategoryDto: CreateSubCategoryDto) {
    return this.subCategoryService.create(createSubCategoryDto);
  }

  @Get()
  findAll() {
    return this.subCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.subCategoryService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateSubCategoryDto: UpdateSubCategoryDto) {
    return this.subCategoryService.update(+id, updateSubCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.subCategoryService.remove(+id);
  }

  @Get('/:id/products')
  findProducts(@Param('id') id: number){
    return this.subCategoryService.findProducts(+id);
  }
  
}
