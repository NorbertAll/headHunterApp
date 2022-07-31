import {IsEmail, IsNotEmpty, IsString} from "class-validator";

export class RegisterDto {
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
}