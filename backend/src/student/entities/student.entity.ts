import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ContractType, TypeWork } from '../../../types';

@Entity()
export class Student extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  phone: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    unique: true,
  })
  githubUsername: string;

  @Column()
  portfolioUrls: string;

  @Column()
  projectUrls: string;

  @Column()
  bio: string;

  @Column({
    type: 'enum',
    enum: TypeWork,
    default: TypeWork.IRRELEVANT,
  })
  expectedTypeWork: TypeWork;

  @Column()
  targetWorkCity: string;

  @Column({
    type: 'enum',
    enum: ContractType,
    default: ContractType.NOPREF,
  })
  expectedContractType: ContractType;

  @Column({
    default: 0,
  })
  expectedSalary: number;

  @Column({
    default: 'NIE',
  })
  canTakeApprenticeship: string;

  @Column({
    type: 'int',
    default: 0,
  })
  monthsOfCommercialExp: number;

  @Column({
    type: 'longtext',
  })
  education: string;

  @Column({
    type: 'longtext',
  })
  workExperience: string;

  @Column({
    type: 'longtext',
  })
  courses: string;
}
