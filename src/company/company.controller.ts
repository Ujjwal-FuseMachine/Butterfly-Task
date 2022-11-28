import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UpdateResult } from 'typeorm';
import { CompanyDto } from './dto/company.dto';
import { Companies } from './entities/company.entity';
import { CompanyService } from './company.service';

@Controller('Companies')
export class CompanyController {
  constructor(private companyService: CompanyService) { }

  @Get()
  async getAll(): Promise<Companies[]> {
    return await this.companyService.getAll();
  }

  @Post()
  async create(@Body() body: Companies): Promise<Companies> {
    return await this.companyService.create(body);
  }

  @Put('/:id')
  async update(@Param('id') id: number, @Body() body: CompanyDto): Promise<UpdateResult> {
    return await this.companyService.update(id, body);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.companyService.delete(id);
  }
}
