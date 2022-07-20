import { HrUser } from '../hrUser/entities/hrUser.entity';

export interface HrInterface {
  id: string;
  email: string;
  fullName: string;
  company: string;
  maxReservedStudents: number;
}

export type GetListOfHrResponse = HrInterface[];

export type GetOneHrResponse = HrUser;
export type CreateHrResponse = HrUser;
