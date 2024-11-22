import { Inject, Injectable } from '@nestjs/common';
import IChurch from './interface/IChurch';
import { ICreateChurchDTO } from './dto/IChurchDTO';
import { Repository } from 'typeorm';
import { Chruch } from './typeorm/chruch.entity';

@Injectable()
export class ChurchService {
  constructor(
    @Inject('CHURCH_REPOSITORY')
    private churchRepository: Repository<IChurch>,
  ) {}

  create(cat: ICreateChurchDTO) {
    this.churchRepository.create(cat);
  }

  public async findAll(): Promise<IChurch[]> {
    return await this.churchRepository.find();
  }
}
