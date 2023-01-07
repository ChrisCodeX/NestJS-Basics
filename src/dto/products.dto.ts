import {
  IsString,
  IsNumber,
  IsPositive,
  IsUrl,
  IsNotEmpty,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsNumber()
  @IsPositive()
  readonly price: number;

  @IsNumber()
  @IsPositive()
  readonly stock: number;

  @IsUrl()
  readonly image: string;
}

export class UpdateProductDto {
  readonly name?: string;
  readonly description?: string;
  readonly price?: number;
  readonly stock?: number;
  readonly image?: string;
}
