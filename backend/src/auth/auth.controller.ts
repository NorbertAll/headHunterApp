import {
    BadRequestException,
    Body,
    ClassSerializerInterceptor,
    Controller,
    Get,
    NotFoundException,
    Post, Put,
    Req,
    Res, SetMetadata, UnauthorizedException, UseGuards,
    UseInterceptors
} from '@nestjs/common';
import {UserService} from "../user/user.service";
import {JwtService} from "@nestjs/jwt";
import { Response, Request } from "express";
import {AuthGuard} from "./auth.guard";
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { UserRoles } from 'src/user/entities/user.entity';
import { Roles } from './auth.role.dekorator';
import {RolesGuard} from "./auth.role.guard";

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {

    constructor(
        private userService: UserService,
        private jwtService: JwtService,
    ) {
    }

    @Post(['admin/register', 'hr/register', '/student/register'])
    @Roles(UserRoles.ADMIN)
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


        const hashed = await bcrypt.hash(body.password, 12);

        let role;
        if(request.path === '/admin/register') {
            role = 'admin';
        } else if (request.path === '/hr/register') {
            role = 'hr';
        } else role = 'student';


        return this.userService.save({
            ...data,
            password: hashed,
            roles: role,
        });
    }


    @Post(['/login'])
    async login(
        @Body('email') email:string,
        @Body('password') password:string,
        @Res({passthrough: true}) response: Response,
        @Req() request: Request,
    )
    {
        const user = await this.userService.findOne({where: {email}});

        if(!user) {
            throw new NotFoundException('User is not found');
        }

        if(!await bcrypt.compare(password, user.password)){
            throw new BadRequestException('Password is invalid');
        }


        const jwt = await this.jwtService.signAsync({
            id: user.id,
            scope: user.roles

        });

        response.cookie('jwt', jwt, {httpOnly: true});

        return {
            message: 'success',
        };
    }

    @UseGuards(AuthGuard)
    @Get(['/user'])
    async user(@Req() request: Request){
        const cookie = request.cookies['jwt'];

        const {id} = await this.jwtService.verifyAsync(cookie);

        return this.userService.findOne({where:{id}});

    };
    @Roles(UserRoles.ADMIN)
    @UseGuards(AuthGuard, RolesGuard)
    @Get('/admin')
    async find(@Req() request: Request){

        return this.userService.find({});

    };

    @UseGuards(AuthGuard)
    @Post(['/logout'])
    async logout(
        @Res({passthrough: true}) response: Response,
    ){
        response.clearCookie('jwt');

        return {
            message: 'success',
        }
    }

    @UseGuards(AuthGuard)
    @Put(['admin/user/password', 'hr/user/password'])
    async updatePassword(
        @Req() request: Request,
        @Body('password') password: string,
        @Body('passwordConfirm') passwordConfirm: string,
    ){
        if (password !== passwordConfirm) {
            throw new BadRequestException('Password do not match!');
        }

        const cookie = request.cookies['jwt'];

        const {id} = await this.jwtService.verifyAsync(cookie);

        await this.userService.update(id, {
            password: await bcrypt.hash(password, 12)
        });

        return this.userService.findOne({where:{id}});

    }

}
