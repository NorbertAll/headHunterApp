import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
  courseEngagment: number;

  @Column()
  projectDegree: number;

  @Column()
  teamProjectDegree: number;

  @Column()
  bonusProjectUrls: string;
}
