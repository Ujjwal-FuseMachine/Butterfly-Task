import { Controller, Post } from '@nestjs/common';
import { PopulateService } from './populate.service';

@Controller('Populate')
export class PopulateController {
  constructor(
    private populateService: PopulateService
  ) {}

  @Post()
  async populateMockData() {
    await this.populateService.populateMockData();
  }
}
