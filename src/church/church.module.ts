import { Module } from '@nestjs/common';
import { ChurchController } from './church.controller';
import { ChurchService } from './church.service';
import { Church } from './typeorm/church.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Church])],
  controllers: [ChurchController],
  providers: [ChurchService],
})
export class ChurchModule {}
