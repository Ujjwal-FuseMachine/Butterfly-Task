import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UpdateResult } from 'typeorm';
import { FeedbackDto } from './dto/feedback.dto';
import { Feedbacks } from './entities/feedback.entity';
import { FeedbackService } from './feedback.service';

@Controller('Feedbacks')
export class FeedbackController {
  constructor(
    private feedbackService: FeedbackService
  ) {}

  @Get()
  async getAll(): Promise<Feedbacks[]> {
    return await this.feedbackService.getAll();
  }

  @Post()
  async create(@Body() body: FeedbackDto[]): Promise<Feedbacks> {
    return await this.feedbackService.create(body);
  }

  @Put('/:id')
  async update(@Param('id') id: number, @Body() body: FeedbackDto): Promise<UpdateResult> {
    return await this.feedbackService.update(id, body);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.feedbackService.delete(id);
  }
}
