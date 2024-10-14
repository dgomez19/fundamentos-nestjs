import { IsNotEmpty, IsNumber, IsUrl, IsPositive } from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';

export class CreateProductDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly description: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly price: number;

  @IsNotEmpty()
  @IsUrl()
  readonly image: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly stock: number;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
