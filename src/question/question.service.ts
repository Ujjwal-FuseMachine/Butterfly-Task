import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { QuestionDto } from './dto/question.dto';
import { Questions } from './entities/question.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Questions) private repository: Repository<Questions>
  ) {}

  async getAll(): Promise<Questions[]> {
    return await this.repository.createQueryBuilder('questions')
    .select()
    .orderBy('RANDOM()')
    .getMany();
    
  }

  async create(model: QuestionDto): Promise<Questions> {
    return await this.repository.save(model);
  }

  async update(id: number, model: QuestionDto): Promise<UpdateResult> {
    return await this.repository.update(id, model);
  }

  async delete(id: number) {
    return await this.repository.delete(id);
  }
}
