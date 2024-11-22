import { DataSource } from 'typeorm';
import { Chruch } from './chruch.entity';

export const churchProviders = [
  {
    provide: 'CHURCH_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Chruch),
    inject: ['DATA_SOURCE'],
  },
];
