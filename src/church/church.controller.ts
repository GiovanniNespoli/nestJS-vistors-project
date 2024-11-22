import { Controller, Get, Post, Body } from '@nestjs/common';
import { ICreateChurchDTO } from './dto/IChurchDTO';
import { ChurchService } from './church.service';
import IChurch from './interface/IChurch';

@Controller('cats')
export class ChurchController {
  constructor(private churchService: ChurchService) {}

  @Post()
  async create(@Body() createCatDto: ICreateChurchDTO) {
    this.churchService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<IChurch[]> {
    return this.churchService.findAll();
  }
}
