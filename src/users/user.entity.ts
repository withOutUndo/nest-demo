import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsString, IsDate } from 'class-validator'

@Entity()
export class UserTbl {
  @PrimaryGeneratedColumn()
  id: number;


  @IsString()
  @Column()
  name: string;

  @IsDate()
  @Column()
  signup_date: Date;
}
