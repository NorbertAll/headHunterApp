import { HrUser } from '../../src/hrUser/entities/hrUser.entity';

export interface Hr {
  id: string;
  email: string;
  password: string;
  fullName: string;
  company: string;
  maxReservedStudents: number;
}

export type GetListOfHrResponse = Hr[];

export type GetOneHrResponse = HrUser;
export type CreateHrResponse = HrUser;
