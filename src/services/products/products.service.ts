import { Injectable } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Amet Lorem eiusmod anim deserunt Lorem minim',
      price: 322,
      stock: 10,
      image: '',
    },
  ];
}
