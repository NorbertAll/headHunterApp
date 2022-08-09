import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Role } from 'types';

export class AuthRegisterDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  passwordConfirm: string;

  @IsString()
  roles: Role;
}
