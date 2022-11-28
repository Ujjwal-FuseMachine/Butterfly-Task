import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feedbacks } from '../feedback/entities/feedback.entity';
import { QuestionController } from './question.controller';
import { Questions } from './entities/question.entity';
import { QuestionService } from './question.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Questions, Feedbacks]),
  ],
  controllers: [QuestionController],
  providers: [QuestionService]

})

export class QuestionModule {}
