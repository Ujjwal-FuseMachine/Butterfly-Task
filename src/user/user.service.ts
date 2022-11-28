import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { Users } from './dto/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users) private repository: Repository<Users>
  ) {}

  async getAll(): Promise<Users[]> {
    return await this.repository.find();
  }

  async create(model: UserDto): Promise<Users> {
    return await this.repository.save(model);
  }

  async update(id: number, model: UserDto): Promise<UpdateResult> {
    return await this.repository.update(id, model);
  }

  async delete(id: number) {
    return await this.repository.delete(id);
  }
}
