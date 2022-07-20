import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateHrUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsString()
  @IsNotEmpty()
  company: string;

  @IsNumber()
  @IsNotEmpty()
  maxReservedStudents: number;
}
