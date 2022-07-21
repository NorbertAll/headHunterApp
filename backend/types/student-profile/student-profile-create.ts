import { ContractType, TypeWork } from './student-profile';

export interface StudentProfileCreate {
  unique: true;
  email: string;
  phone: number;
  firstName: string;
  lastName: string;
  githubUsername: string;
  portfolioUrls: string;
  projectUrls: string;
  bio: string;
  expectedTypeWork: TypeWork;
  targetWorkCity: string;
  expectedContractType: ContractType;
  expectedSalary: number;
  canTakeApprenticeship: string;
  monthsOfCommercialExp: number;
  education: string;
  workExperience: string;
  courses: string;
}
