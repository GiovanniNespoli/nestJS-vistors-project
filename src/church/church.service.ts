import { Inject, Injectable } from '@nestjs/common';
import { ICreateChurchDTO } from './dto/IChurchDTO';
import { Repository } from 'typeorm';
import { Church } from './typeorm/church.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ChurchService {
  constructor(
    @InjectRepository(Church)
    private churchRepository: Repository<Church>,
  ) {}

  async create(data: ICreateChurchDTO): Promise<Church> {
    const newChurch = this.churchRepository.create(data);
    return await this.churchRepository.save(newChurch);
  }
}
