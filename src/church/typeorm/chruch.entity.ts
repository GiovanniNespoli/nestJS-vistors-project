import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Chruch {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  churhName: string;

  @Column('int', { nullable: true })
  visitorsNumber: number;

  @Column('text', { nullable: true })
  groupLeader: string;

  @Column('text', { nullable: true })
  churchMinister: string;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
