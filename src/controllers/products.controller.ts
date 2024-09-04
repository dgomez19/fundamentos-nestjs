import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  Res,
} from '@nestjs/common';

import { Response } from 'express';

@Controller('products')
export class ProductsController {
  @Get()
  @HttpCode(HttpStatus.ACCEPTED)
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    };
  }

  @Get('filter')
  getProductFilter(@Res() response: Response) {
    /*
    No es recomendable devolver con express, es mejor hacerlo como en el metodo getProducts
    */
    return response.status(200).send({
      message: 'yo soy un filter',
    });
  }

  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    return {
      message: `product ${productId}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Acción de crear',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      message: 'Accion de editar',
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number, @Body() payload: any) {
    return {
      message: 'Accion de eliminar',
      id,
      payload,
    };
  }
}
