import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll() {
    return 'All Products';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return 'One Product';
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductRequest: string) {
    return updateProductRequest;
  }
}
