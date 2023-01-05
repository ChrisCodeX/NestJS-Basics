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
  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    return product;
  }

  create(data: Product) {
    this.counterId += 1;
    const newProduct: Product = {
      id: this.counterId,
      ...data,
    };
    this.products.push(newProduct);
  }
}
