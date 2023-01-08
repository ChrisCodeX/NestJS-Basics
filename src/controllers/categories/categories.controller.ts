import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get('/:id/products/productId')
  getCategory(
    @Param('id', ParseIntPipe) id: number,
    @Param('productId', ParseIntPipe) productId: number,
  ) {
    return `${id} - ${productId}`;
  }
}
