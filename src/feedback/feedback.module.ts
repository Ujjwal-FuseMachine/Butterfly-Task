import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedbackController } from './feedback.controller';
import { Feedbacks } from './entities/feedback.entity';
import { FeedbackService } from './feedback.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Feedbacks])
  ],
  controllers: [FeedbackController],
  providers: [FeedbackService]
})

export class FeedbackModule {}
