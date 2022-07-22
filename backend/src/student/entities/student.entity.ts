import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Status } from '../../../types/student';

@Entity()
export class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  courseCompletion: number;

  @Column()
  courseEngagement: number;

  @Column()
  projectDegree: number;

  @Column()
  teamProjectDegree: number;

  @Column()
  bonusProjectUrls: string;

  @Column()
  token: string;

  @Column({
    type: 'enum',
    enum: Status,
  })
  status: Status;
}
