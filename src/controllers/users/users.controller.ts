import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/dto/users.dto';
import { UsersService } from 'src/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  // Get all users
  @Get()
  getUsers() {
    return {
      message: this.userService.findAll(),
    };
  }

  // Get a user
  @Get('/:id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return {
      message: this.userService.findOne(id),
    };
  }

  // Create a user
  @Post()
  create(@Body() payload: CreateUserDto) {
    return {
      message: 'created',
      payload: this.userService.create(payload),
    };
  }

  // Update a user
  @Patch('/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateUserDto,
  ) {
    return {
      message: 'updated',
      payload: this.userService.update(id, payload),
    };
  }

  // Delete a user
  @Delete('/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return {
      message: 'deleted',
      payload: this.userService.remove(id),
    };
  }
}
