import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';

import { CreateProductDto, UpdateProductDto } from 'src/dto/products.dto';

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

  findOne(productId: number) {
    const product = this.products.find((item) => item.id == productId);
    if (!product) {
      throw new NotFoundException(`product #${productId} not found`);
    }
    return product;
  }

  create(data: CreateProductDto) {
    this.counterId += 1;
    const newProduct: Product = {
      id: this.counterId,
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, changes: UpdateProductDto) {
    const product = this.findOne(id);
    const index = this.products.findIndex((item) => item.id == id);
    if (index != -1) {
      this.products[index] = {
        ...product,
        ...changes,
      };
      return this.products[index];
    }
    return null;
  }

  remove(productId: number) {
    const productIndex = this.products.findIndex(
      (item) => item.id === productId - 1,
    );
    console.log(productIndex);
    if (productIndex === -1) {
      throw new NotFoundException(`product #${productId} not found`);
    }
    this.products.splice(productIndex, 1);
    return true;
  }
}
