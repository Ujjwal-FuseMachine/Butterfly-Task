import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/user/dto/user.entity';
import { PopulateController } from './populate.controller';
import { PopulateService } from './populate.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users])
  ],
  controllers: [PopulateController],
  providers: [PopulateService]
})
export class PopulateModule {}
