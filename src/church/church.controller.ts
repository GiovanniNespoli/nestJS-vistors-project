import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ICreateChurchDTO, IUpdateChurchDTO } from './dto/IChurchDTO';
import { ChurchService } from './church.service';

@Controller('church')
export class ChurchController {
  constructor(private churchService: ChurchService) {}

  @Post()
  async create(@Body() data: ICreateChurchDTO) {
    const createNewChurch = await this.churchService.createChurchService(data);
    return JSON.stringify(createNewChurch);
  }

  @Get()
  async get() {
    const getChurchs = await this.churchService.getChurchService();
    return JSON.stringify(getChurchs);
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    const getChurch = await this.churchService.getChurchByIdService(id);
    return JSON.stringify(getChurch);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deleteChurch = await this.churchService.deleteChurch(id);
    return JSON.stringify(deleteChurch);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() newData: IUpdateChurchDTO) {
    const updateChurch = await this.churchService.updateChurch(id, newData);
    return updateChurch;
  }
}
