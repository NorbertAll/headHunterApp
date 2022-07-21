import {BadRequestException, Body, Controller, NotFoundException, Post, Res } from '@nestjs/common';
import {UserService} from "../user/user.service";

@Controller()
export class AuthController {

    constructor(
        private userService: UserService,
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

        return {email, password};
    }
}
