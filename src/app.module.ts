import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { UserModule } from './user/user.module';
import { Users } from './user/dto/user.entity';
import { Questions } from './question/entities/question.entity';
import { Feedbacks } from './feedback/entities/feedback.entity';
import { Satisfactions } from './satisfaction/entities/satisfaction.entity';
import { FeedbackModule } from './feedback/feedback.module';
import { QuestionModule } from './question/question.module';
import { SatisfactionModule } from './satisfaction/satisfaction.module';
import { CompanyController } from './company/company.controller';
import { CompanyService } from './company/company.service';
import { CompanyModule } from './company/company.module';
import { Companies } from './company/entities/company.entity';
import { PopulateModule } from './populate/populate.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }), 
    TypeOrmModule.forFeature([Companies, Users, Questions, Feedbacks, Satisfactions]),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          type: 'postgres',
          host: configService.get('DB_HOST'),
          port: parseInt(configService.get('DB_PORT')),
          database: configService.get('DB_NAME'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          entities: [Companies, Users, Questions, Feedbacks, Satisfactions],
          synchronize: true,
        };
      },
    }), 

    FeedbackModule,
    QuestionModule,
    SatisfactionModule,
    UserModule,
    CompanyModule,
    PopulateModule,

  ],
  controllers: [CompanyController],
  providers: [CompanyService]
})

export class AppModule {
  constructor(private dataSource: DataSource) {}
}
