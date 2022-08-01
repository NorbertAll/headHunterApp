import {BadRequestException, Body, Controller, NotFoundException, Post, Req, Res, UseGuards} from '@nestjs/common';
import {RegisterDto} from "../auth/dto/register.dto";
import {Request} from "express";
import * as bcrypt from "bcrypt";
import {UserService} from "./user.service";
import { Roles } from 'src/auth/auth.role.dekorator';
import {UserRoles} from "./entities/user.entity";
import {AuthGuard} from "../auth/auth.guard";
import {CreateDto} from "./dto/create.dto";

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
    @Post(['admin/create', 'hr/create', '/student/create'])
    async create(
        @Body() body: CreateDto,
        @Req() request: Request,
        @Body('email') email: string,){
        const data = body;

        const user = await this.userService.findOne({where: {email}});

        if(user) {
            throw new NotFoundException('Email is use! Try new email!');
        }

        console.log('send email');

        let role;
        if(request.path === '/user/admin/create') {
            role = 'admin';
        } else if (request.path === '/user/hr/create') {
            role = 'hr';
        } else role = 'student';


        return this.userService.save({
            ...data,
            roles: role,
        });
    }

    //TEST registry endpiont
    //@UseGuards(AuthGuard)
    @Post(['admin/register', 'hr/register', '/student/register'])
    async register(
        @Body() body: RegisterDto,
        @Req() request: Request,
        @Body('email') email: string,){
        const {passwordConfirm, ...data} = body;

        const user = await this.userService.findOne({where: {email}});

        if(user.is_active) {
            throw new BadRequestException('Account is active!');
        }

        if (body.password === ('' && null)) {
            throw new BadRequestException('Password must by not empty!');
        }

        if (body.password !== body.passwordConfirm) {
            throw new BadRequestException('Password do not match!');
        }


        const hashed = await bcrypt.hash(body.password, 12);

        console.log(user);

        return this.userService.save({
            ...user,
            password: hashed,
            is_active: true,
        });
    }


}
