import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { FeedbackDto } from './dto/feedback.dto';
import { Feedbacks } from './entities/feedback.entity';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectRepository(Feedbacks) private repository: Repository<Feedbacks>
  ) {}

  async getAll(): Promise<Feedbacks[]> {
    return await this.repository.find();
  }

  async create(model: any): Promise<Feedbacks> {
    return await this.repository.save(model);
  }

  async update(id: number, model: FeedbackDto): Promise<UpdateResult> {
    return await this.repository.update(id, model);
  }

  async delete(id: number) {
    return await this.repository.delete(id);
  }
}
