import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  /* Endpoints examples */
  @Get('/ruta')
  newEndpoint() {
    return 'Holaaa';
  }

  // Get parameters
  @Get('/products/:id')
  getProduct(@Param() params): string {
    return `Product id is: ${params.id}`;
  }

  @Get('/v2/products/:id')
  getProduct2(@Param('id') id: string) {
    return `Product id is: ${id}`;
  }

  @Get('/categories/:categoryId/products/:productId')
  getCategories(
    @Param('categoryId') categoryId: number,
    @Param('productId') productId: number,
  ) {
    return `ProductId: ${productId} - CategoryId: ${categoryId}`;
  }
}
