import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UpdateResult } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { Users } from './dto/user.entity';
import { UserService } from './user.service';

@Controller('Users')
export class UserController {
  constructor(
    private userService: UserService
  ) {}

  @Get()
  async getAll(): Promise<Users[]> {
    return await this.userService.getAll();
  }

  @Post()
  async create(@Body() body: UserDto): Promise<Users> {
    return await this.userService.create(body);
  }

  @Put('/:id')
  async update(@Param('id') id: number, @Body() body: UserDto): Promise<UpdateResult> {
    return await this.userService.update(id, body);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.userService.delete(id);
  }
}
