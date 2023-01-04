import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit: number,
    @Query('offset') offset: number,
    @Query('brand') brand: string,
  ) {
    return `product limit => ${limit} offset => ${offset} brand => ${brand}`;
  }

  @Get('/filter')
  getProductFilter() {
    return {
      message: 'Im a filter',
    };
  }

  @Get('/:productId')
  getProduct(@Param('productId') productId: number) {
    return `product ${productId}`;
  }
}
