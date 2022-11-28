import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SatisfactionController } from './satisfaction.controller';
import { Satisfactions } from './entities/satisfaction.entity';
import { SatisfactionService } from './satisfaction.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Satisfactions])
  ],
  controllers: [SatisfactionController],
  providers: [SatisfactionService]
})
export class SatisfactionModule {}
