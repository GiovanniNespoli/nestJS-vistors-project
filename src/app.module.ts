import { Module } from '@nestjs/common';
import { ChurchModule } from './church/church.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Church } from './church/typeorm/church.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'docker',
      database: 'visitors',
      entities: [Church],
      synchronize: true,
    }),
    ChurchModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
