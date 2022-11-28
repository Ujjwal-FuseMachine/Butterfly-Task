import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UpdateResult } from 'typeorm';
import { QuestionDto } from './dto/question.dto';
import { Questions } from './entities/question.entity';
import { QuestionService } from './question.service';

@Controller('Questions')
export class QuestionController {
  constructor(
    private questionService: QuestionService
  ) {}

  @Get()
  async getAll(): Promise<Questions[]> {
    return await this.questionService.getAll();
  }

  @Post()
  async create(@Body() body: QuestionDto): Promise<Questions> {
    return await this.questionService.create(body);
  }

  @Put('/:id')
  async update(@Param('id') id: number, @Body() body: QuestionDto): Promise<UpdateResult> {
    return await this.questionService.update(id, body);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.questionService.delete(id);
  }
}
