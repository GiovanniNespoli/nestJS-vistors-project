import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
  } from 'typeorm';
  
  @Entity()
  export class People {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column('text')
    name: string;
  
    @Column('text', { nullable: true })
    email: string;
  
    @Column('text', { nullable: true })
    phone: string;
  
    @Column('text', { nullable: true })
    position: string;

    @Column('text', { nullable: true })
    churchName: string;

    @Column('text', { nullable: true })
    observation: string;
    
    @CreateDateColumn()
    createAt: Date;
  
    @UpdateDateColumn()
    updateAt: Date;
  }
  