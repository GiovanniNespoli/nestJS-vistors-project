import { Controller, Get, Post, Body } from '@nestjs/common';
import { ICreateChurchDTO } from './dto/IChurchDTO';
import { ChurchService } from './church.service';

@Controller('church')
export class ChurchController {
  constructor(private churchService: ChurchService) {}

  @Post()
  async create(@Body() data: ICreateChurchDTO) {
    this.churchService.create(data);
  }
}
