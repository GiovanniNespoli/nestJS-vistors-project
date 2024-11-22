import { Injectable } from '@nestjs/common';
import IChurch from './interface/IChurch';
import { ICreateChurchDTO } from './dto/IChurchDTO';

@Injectable()
export class ChurchService {
  private readonly church: IChurch[] = [];

  create(cat: ICreateChurchDTO) {
    this.church.push(cat);
  }

  findAll(): IChurch[] {
    return this.church;
  }
}
