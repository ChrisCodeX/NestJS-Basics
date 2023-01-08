import { Field, InputType, PartialType } from '@nestjs/graphql';

import { IsString, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateCustomerDto {
  @Field()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  phone: string;
}

@InputType()
export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
