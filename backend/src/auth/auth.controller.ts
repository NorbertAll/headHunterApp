import {BadRequestException, Body, Controller, NotFoundException, Post, Res } from '@nestjs/common';
import {UserService} from "../user/user.service";
import {JwtService} from "@nestjs/jwt";

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

        return jwt;
    }

}
