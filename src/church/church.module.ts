import { Module } from '@nestjs/common';
import { ChurchController } from './church.controller';
import { ChurchService } from './church.service';
import { DatabaseModule } from '../typeorm/database.module';
import { churchProviders } from './typeorm/church.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ChurchController],
  providers: [ChurchService, ...churchProviders],
})
export class ChurchModule {}
