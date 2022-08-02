import {
    BadRequestException,
    Body,
    ClassSerializerInterceptor,
    Controller,
    NotFoundException,
    Post,
    Req,
    Res, UseGuards,
    UseInterceptors
} from '@nestjs/common';
import {UserService} from "../user/user.service";
import {JwtService} from "@nestjs/jwt";
import { Response, Request } from "express";
import {AuthGuard} from "./auth.guard";
import * as bcrypt from 'bcrypt';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {

    constructor(
        private userService: UserService,
        private jwtService: JwtService,
    ) {
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

        if(!user.is_active) {
            throw new BadRequestException('Your account is not active.');
        }

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

        return this.userService.save({
            ...user,
            token: jwt,
        })
    }



    @UseGuards(AuthGuard)
    @Post(['/logout'])
    async logout(
        @Req() request: Request,
        @Res({passthrough: true}) response: Response,
    ){
        const cookie = request.cookies['jwt'];
        const {id} = await this.jwtService.verifyAsync(cookie);
        const user = await this.userService.findOne({where: {id}});


        response.clearCookie('jwt');

        await this.userService.save({
            ...user,
            token: null,
        });

        return {
                message: 'success'
            }

    }

}
