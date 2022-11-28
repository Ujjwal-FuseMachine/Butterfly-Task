import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UpdateResult } from 'typeorm';
import { SatisfactionDto } from './dto/satisfaction.dto';
import { Satisfactions } from './entities/satisfaction.entity';
import { SatisfactionService } from './satisfaction.service';

@Controller('Satisfactions')
export class SatisfactionController {
  constructor(
    private satisfactionService: SatisfactionService
  ) {}

  @Get()
  async getAll(): Promise<Satisfactions[]> {
    return await this.satisfactionService.getAll();
  }

  @Post()
  async create(@Body() body: SatisfactionDto): Promise<Satisfactions> {
    return await this.satisfactionService.create(body);
  }

  @Put('/:id')
  async update(@Param('id') id: number, @Body() body: SatisfactionDto): Promise<UpdateResult> {
    return await this.satisfactionService.update(id, body);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.satisfactionService.delete(id);
  }
}
