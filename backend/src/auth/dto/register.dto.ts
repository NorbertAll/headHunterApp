import {IsEmail, IsNotEmpty, IsString} from "class-validator";

export class RegisterDto {
    @IsNotEmpty()
    @IsString()
    first_name: string;
    @IsString()
    @IsNotEmpty()
    last_name: string;
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
}