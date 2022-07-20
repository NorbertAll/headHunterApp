import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Hr {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  fullName: string;

  @Column()
  company: string;

  @Column()
  maxReservedStudents: number;
  // TODO: 'add relation'
}
