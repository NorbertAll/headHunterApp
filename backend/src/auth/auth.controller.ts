import {
    BadRequestException,
    Body,
    ClassSerializerInterceptor,
    Controller,
    Get,
    NotFoundException,
    Post, Put,
    Req,
    Res, UseGuards,
    UseInterceptors
} from '@nestjs/common';
import {UserService} from "../user/user.service";
import {JwtService} from "@nestjs/jwt";
import { Response, Request } from "express";
import {AuthGuard} from "./auth.guard";

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {

    constructor(
        private userService: UserService,
        private jwtService: JwtService,
    ) {
    }

    @Post('admin/login')
    async login(
        @Body('email') email:string,
        @Body('password') password:string,
        @Res({passthrough: true}) response: Response,
    )
    {
        const user = await this.userService.findOne({where: {email}});

        if(!user) {
            throw new NotFoundException('User is not found');
        }

        if(!await (password === user.password)){
            throw new BadRequestException('Password is invalid');
        }

        const jwt = await this.jwtService.signAsync({
            id: user.id,

        })

        response.cookie('jwt', jwt, {httpOnly: true});

        return {
            message: 'success',
        };
    }

    @UseGuards(AuthGuard)
    @Get('admin/user')
    async user(@Req() request: Request){
        const cookie = request.cookies['jwt'];

        const {id} = await this.jwtService.verifyAsync(cookie);

        return this.userService.findOne({where:{id}});

    };

    @UseGuards(AuthGuard)
    @Post('admin/logout')
    async logout(
        @Res({passthrough: true}) response: Response,
    ){
        response.clearCookie('jwt');

        return {
            message: 'success',
        }
    }

    @UseGuards(AuthGuard)
    @Put('admin/user/password')
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
                password
        });

        return this.userService.findOne({where:{id}});

    }

}
