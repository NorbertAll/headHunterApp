import { Status } from './student';
import { ContractType, TypeWork } from '../student-profile';

export interface StudentInfo {
  id: string;

  email: string;

  courseCompletion: number;

  courseEngagement: number;

  projectDegree: number;

  teamProjectDegree: number;

  bonusProjectUrls: string;

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

  status: Status;
}
