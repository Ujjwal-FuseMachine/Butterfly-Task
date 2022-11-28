import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CompanyDto } from './dto/company.dto';
import { Companies } from './entities/company.entity';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Companies) private repository: Repository<Companies>
  ) { }

  async getAll(): Promise<Companies[]> {
    return await this.repository.find();
  }

  async create(model: CompanyDto): Promise<Companies> {
    return await this.repository.save(model);
  }

  async update(id: number, model: CompanyDto): Promise<UpdateResult> {
    return await this.repository.update(id, model);
  }

  async delete(id: number) {
    return await this.repository.delete(id);
  }
}
