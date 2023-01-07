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
  ParseIntPipe,
} from '@nestjs/common';

/* This is my pipe */
// import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';

// Product Service import
import { ProductsService } from 'src/services/products/products.service';

// Products Dto import
import { CreateProductDto, UpdateProductDto } from '../../dto/products.dto';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}
  /* Get Methods */
  @HttpCode(HttpStatus.ACCEPTED)
  @Get()
  getProducts(
    @Query('limit', ParseIntPipe) limit: number,
    @Query('offset', ParseIntPipe) offset: number,
    @Query('brand') brand: string,
  ) {
    return {
      message: this.productService.findAll(),
    };
  }

  @Get('/filter')
  getProductFilter() {
    return {
      message: 'Im a filter',
    };
  }

  @Get('/:productId')
  getProduct(@Param('productId', ParseIntPipe) productId: number) {
    return {
      message: this.productService.findOne(productId),
    };
  }

  /* Post Methods */
  @Post()
  create(@Body() payload: CreateProductDto) {
    const newProduct = this.productService.create(payload);
    return {
      message: 'created',
      newProduct,
    };
  }

  /* Patch Methods */
  @Patch('/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateProductDto,
  ) {
    const product = this.productService.update(id, payload);
    return {
      message: 'updated',
      payload: {
        product,
      },
    };
  }

  /* Deleted Methods */
  @Delete('/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productService.remove(+id);
  }
}
