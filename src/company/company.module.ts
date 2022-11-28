import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyController } from './company.controller';
import { Companies } from './entities/company.entity';
import { CompanyService } from './company.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Companies])
  ],
  controllers: [CompanyController],
  providers: [CompanyService]
})

export class CompanyModule {}
