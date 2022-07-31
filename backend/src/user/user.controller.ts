import {BadRequestException, Body, Controller, NotFoundException, Post, Req, Res, UseGuards} from '@nestjs/common';
import {RegisterDto} from "../auth/dto/register.dto";
import {Request, Response} from "express";
import * as bcrypt from "bcrypt";
import {UserService} from "./user.service";
import {JwtService} from "@nestjs/jwt";
import { Roles } from 'src/auth/auth.role.dekorator';
import {UserRoles} from "./entities/user.entity";
import {AuthGuard} from "../auth/auth.guard";

@Controller('user')
export class UserController {

    constructor(
        private userService: UserService,
    ) {
    }
    //register
    //admin
    //is_active :false
    @UseGuards(AuthGuard)
    @Roles(UserRoles.ADMIN)
    @Post(['admin/register', 'hr/register', '/student/register'])
    async register(
        @Body() body: RegisterDto,
        @Req() request: Request,
        @Body('email') email: string,){
        const {passwordConfirm, ...data} = body;

        const user = await this.userService.findOne({where: {email}});

        if(user) {
            throw new NotFoundException('Email is use! Try new email!');
        }

        if (body.password !== body.passwordConfirm) {
            throw new BadRequestException('Password do not match!');
        }

        const is_active = false;

        console.log('send email');


        const hashed = await bcrypt.hash(body.password, 12);

        let role;
        if(request.path === '/user/admin/register') {
            role = 'admin';
        } else if (request.path === '/user/hr/register') {
            role = 'hr';
        } else role = 'student';


        return this.userService.save({
            ...data,
            password: hashed,
            roles: role,
        });
    }

}
