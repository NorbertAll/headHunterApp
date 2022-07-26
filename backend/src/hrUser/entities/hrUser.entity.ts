import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class HrUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  fullName: string;

  @Column()
  password: string;

  @Column()
  company: string;

  @Column()
  maxReservedStudents: number;
  // TODO: 'add relation to auth oneToOne & oneToMany to meeting module'
  // @OneToOne(() => Auth)
  // @JoinColumn()
  // auth: Auth;

  // hrUser can have multiple meetings
  // @OneToMany(() => Meeting, (meeting) => meeting.hr)
  // meetings: Meeting[];
}
