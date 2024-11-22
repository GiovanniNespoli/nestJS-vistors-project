import { Module } from '@nestjs/common';
import { ChurchModule } from './church/church.module';

@Module({
  imports: [ChurchModule],
})
export class AppModule {}
