import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PeopleService } from './people.service';
import IPeopleDTO from './dto/IPoepleDTO';

@Controller('people')
export class PeopleController {
  constructor(private peopleService: PeopleService) { }

  @Post()
  async create(@Body() data: IPeopleDTO) {
    const createNewPeople = await this.peopleService.createPeople(data);
    return JSON.stringify(createNewPeople);
  }

  @Get()
  async get() {
    const getPeople = await this.peopleService.getPeople();
    return JSON.stringify(getPeople);
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    const getPeopleById = await this.peopleService.getPeopleById(id);
    return JSON.stringify(getPeopleById);
  }

  @Get('/date/:date')
  async getByDate(@Param('date') date: Date) {
    const getPeopleByDate = await this.peopleService.getPeopleByDate(date);
    return JSON.stringify(getPeopleByDate);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deletePeople = await this.peopleService.deletePeople(id);
    return JSON.stringify(deletePeople);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() newData: IPeopleDTO) {
    const updatePeople = await this.peopleService.updatePeople(id, newData);
    return JSON.stringify(updatePeople);
  }
}
