import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos';

import { Product } from './../entities/product.entity';

@Injectable()
export class ProductsService {
  private counterId = 1;

  private products: Product[] = [
    {
      id: 1,
      name: 'Zaparos',
      description: 'Zapatos de hombre',
      price: 100000,
      image: '',
      stock: 100,
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      // throw 'SOY UN ERROR'; Imprimir un error en la consola
      throw new NotFoundException(
        `No se encontró información del producto con id #${id}`,
      );
    }

    return product;
  }

  create(payload: CreateProductDto) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };

    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateProductDto) {
    const product = this.findOne(id);

    const index = this.products.findIndex((item) => item.id === id);

    this.products[index] = {
      ...product,
      ...payload,
    };

    return this.products[index];
  }
}
