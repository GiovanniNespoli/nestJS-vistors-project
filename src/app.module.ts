import { Module } from '@nestjs/common';
import { ChurchModule } from './church/church.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Church } from './church/typeorm/church.entity';
import { PeopleModule } from './people/people.module';
import { People } from './people/typeorm/people.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER_NAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Church, People],
      synchronize: true,
      extra: {
        timezone: 'America/Sao_Paulo', 
      },
    }),
    ChurchModule,
    PeopleModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) { }
}
