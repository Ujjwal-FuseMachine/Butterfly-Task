import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SatisfactionDto } from './dto/satisfaction.dto';
import { Satisfactions } from './entities/satisfaction.entity';

@Injectable()
export class SatisfactionService {
  constructor(
    @InjectRepository(Satisfactions) private repository: Repository<Satisfactions>
  ) {}

  async getAll(): Promise<Satisfactions[]> {
    return await this.repository.find();
  }

  async create(model: SatisfactionDto) {
    return await this.repository.save(model);
  }

  async update(id: number, model: SatisfactionDto) {
    return await this.repository.update(id, model);
  }

  async delete(id: number) {
    return await this.repository.delete(id);
  }
}
