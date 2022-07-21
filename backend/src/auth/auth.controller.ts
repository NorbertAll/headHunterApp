import {BadRequestException, Body, Controller, Get, NotFoundException, Post, Req, Res } from '@nestjs/common';
import {UserService} from "../user/user.service";
import {JwtService} from "@nestjs/jwt";
import { Response, Request } from "express";

@Controller()
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

    @Get('admin/user')
    async user(@Req() request: Request){
        const cookie = request.cookies['jwt'];
        try {
            const {id} = await this.jwtService.verifyAsync(cookie);

            return await this.userService.find({where:{id}});

        } catch (e) {
            throw new BadRequestException(`You must be logged. Error message: ${e.message}`);
        }
    };

}
