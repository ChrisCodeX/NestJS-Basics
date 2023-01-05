import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  /* Get Methods */
  @HttpCode(HttpStatus.ACCEPTED)
  @Get()
  getProducts(
    @Query('limit') limit: number,
    @Query('offset') offset: number,
    @Query('brand') brand: string,
  ) {
    return {
      message: `product limit => ${limit} offset => ${offset} brand => ${brand}`,
    };
  }

  @Get('/filter')
  getProductFilter() {
    return {
      message: 'Im a filter',
    };
  }

  @Get('/:productId')
  getProduct(@Param('productId') productId: number) {
    return {
      message: `product ${productId}`,
    };
  }

  /* Post Methods */
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'created',
      payload,
    };
  }

  /* Patch Methods */
  @Patch('/:id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      message: 'updated',
      payload: {
        id,
        payload,
      },
    };
  }

  /* Deleted Methods */
  @Delete('/:id')
  delete(@Param('id') id: number, @Body() payload: any) {
    return {
      message: `product ${id} deleted`,
      payload,
    };
  }
}
