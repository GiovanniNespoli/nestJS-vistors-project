import { HttpStatus, Injectable } from '@nestjs/common';
import { ICreateChurchDTO, IUpdateChurchDTO } from './dto/IChurchDTO';
import { Repository } from 'typeorm';
import { Church } from './typeorm/church.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomExceptionHandler } from 'src/errors/customExceptionHandler';

@Injectable()
export class ChurchService {
  constructor(
    @InjectRepository(Church)
    private churchRepository: Repository<Church>,
  ) {}

  async createChurchService(data: ICreateChurchDTO): Promise<Church> {
    const newChurch = this.churchRepository.create(data);
    return await this.churchRepository.save(newChurch);
  }

  async getChurchService(): Promise<Church[]> {
    return this.churchRepository.find();
  }

  async getChurchByIdService(id: string): Promise<Church | undefined> {
    const findChurch = await this.churchRepository.findOneBy({
      id,
    });

    if (!findChurch) {
      throw new CustomExceptionHandler({
        message: 'Church not found!',
        httpStatus: HttpStatus.NOT_FOUND,
      });
    }

    return findChurch;
  }

  async deleteChurch(id: string): Promise<Church> {
    const church = await this.churchRepository.findOneBy({ id });

    if (!church) {
      throw new CustomExceptionHandler({
        message: 'Church not found!',
        httpStatus: HttpStatus.NOT_FOUND,
      });
    }

    await this.churchRepository.delete(id);

    return church;
  }

  async updateChurch(id: string, newData: IUpdateChurchDTO): Promise<Church> {
    const church = await this.churchRepository.findOneBy({ id });

    if (!church) {
      throw new CustomExceptionHandler({
        message: 'Church not found!',
        httpStatus: HttpStatus.NOT_FOUND,
      });
    }

    Object.assign(church, newData);
    return await this.churchRepository.save(church);
  }
}
