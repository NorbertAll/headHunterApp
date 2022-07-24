import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateStudentDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  courseCompletion: number;

  courseEngagement: number;

  projectDegree: number;

  teamProjectDegree: number;

  bonusProjectUrls: string;
}
