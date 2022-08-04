import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { Role } from 'types';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ default: null })
  accessToken: string | null;

  @Column({ unique: true })
  email: string;

  @Exclude()
  @Column({ default: null })
  passwordHash: string;

  @Column({ default: false })
  is_active: boolean;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.STUDENT,
  })
  role: Role;
}
