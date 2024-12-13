import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { People } from './typeorm/people.entity';
import { Repository } from 'typeorm';
import IPeopleDTO from './dto/IPoepleDTO';
import { CustomExceptionHandler } from 'src/errors/customExceptionHandler';

@Injectable()
export class PeopleService {
  constructor(
    @InjectRepository(People)
    private peopleRepository: Repository<People>,
  ) {}

  async createPeople(data: IPeopleDTO): Promise<People> {
    const newPeople = this.peopleRepository.create(data);
    return await this.peopleRepository.save(newPeople);
  }

  async getPeople(): Promise<People[]> {
    return await this.peopleRepository.find();
  }

  async getPeopleById(id: string): Promise<People | undefined> {
    const people = await this.peopleRepository.findOneBy({ id });

    if (!people) {
      throw new CustomExceptionHandler({
        message: 'People not found!',
        httpStatus: HttpStatus.NOT_FOUND,
      });
    }

    return people;
  }

  async deletePeople(id: string): Promise<People> {
    const findPeople = await this.peopleRepository.findOneBy({ id });

    if (!findPeople) {
      throw new CustomExceptionHandler({
        message: 'People not found!',
        httpStatus: HttpStatus.NOT_FOUND,
      });
    }

    await this.peopleRepository.delete({ id });
    return findPeople;
  }

  async updatePeople(id: string, newData: IPeopleDTO): Promise<People> {
    const people = await this.peopleRepository.findOneBy({ id });

    if (!people) {
      throw new CustomExceptionHandler({
        message: 'People not found!',
        httpStatus: HttpStatus.NOT_FOUND,
      });
    }

    Object.assign(people, newData);
    return await this.peopleRepository.save(people);
  }
}
