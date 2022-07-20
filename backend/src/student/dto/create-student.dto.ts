import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUrl,
} from 'class-validator';
import { ContractType, TypeWork } from '../../../types';

export class CreateStudentDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNumber()
  phone: number;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  githubUsername: string;

  @IsString()
  @IsUrl()
  portfolioUrls: string;

  @IsString()
  @IsUrl()
  projectUrls: string;

  @IsString()
  bio: string;

  expectedTypeWork: TypeWork;

  @IsString()
  targetWorkCity: string;

  expectedContractType: ContractType;

  @IsNumber()
  expectedSalary: number;

  @IsString()
  canTakeApprenticeship: string;

  @IsNumber()
  monthsOfCommercialExp: number;

  @IsString()
  education: string;

  @IsString()
  workExperience: string;

  @IsString()
  courses: string;
}
