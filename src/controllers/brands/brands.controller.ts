import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { CreateBrandDto, UpdateBrandDto } from 'src/dto/brands.dto';

import { BrandsService } from 'src/services/brands/brands.service';

@Controller('brands')
export class BrandsController {
  constructor(private brandsService: BrandsService) {}

  /* Get Methods */
  // Get all brands
  @Get()
  getBrands() {
    return {
      message: this.brandsService.findAll(),
    };
  }

  // Get a brand by id
  @Get('/:id')
  getBrand(@Param('id', ParseIntPipe) id: number) {
    return {
      message: this.brandsService.findOne(id),
    };
  }

  /* Post Methods */
  // Create a new brand
  @Post()
  create(@Body() payload: CreateBrandDto) {
    return {
      message: this.brandsService.create(payload),
    };
  }

  /* Patch Methods */
  // Update brand
  @Patch('/:id')
  patch(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateBrandDto,
  ) {
    return {
      message: this.brandsService.update(id, payload),
    };
  }

  /* Delete Methods */
  // Delete a brand
  @Delete('/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return {
      message: this.brandsService.delete(id),
    };
  }
}
