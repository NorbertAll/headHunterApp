import {IsEmail, IsNotEmpty, IsString} from "class-validator";

export class CreateDto {
    @IsNotEmpty()
    @IsString()
    name: string;
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;
}