import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { AuthRegisterDto } from '../auth/dto/register.dto';
import { UserService } from './user.service';
import { Role } from 'types';
import { hashPassword } from './utils/hash-password';
import { CreatedUserDto } from './dto/created-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post(['register'])
  async register(@Body() body: AuthRegisterDto) {
    const { email, password, passwordConfirm, role } = body;

    const user = await this.userService.findOne({ where: { email } });

    if (user) {
      throw new BadRequestException('Konto już istnieje!');
    }

    if (password === ('' && null)) {
      throw new BadRequestException('Hasło nie może być puste!');
    }

    if (password !== passwordConfirm) {
      throw new BadRequestException('Hasła do siebie nie pasują!');
    }

    if (!role || !Object.values(Role).includes(role)) {
      body.role = Role.STUDENT;
    }

    const passwordHash = await hashPassword(body.password);

    const createdUser = await this.userService.save({
      ...body,
      passwordHash,
      is_active: true,
    });

    return new CreatedUserDto(
      createdUser.name,
      createdUser.email,
      createdUser.role,
    );
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/')
  async user(@Req() request: Request) {
    return this.userService.find({});
  }

  // @Roles(Role.ADMIN)
  // @UseGuards(AuthGuard, RolesGuard)
  // @Get('/admin')
  // async find(@Req() request: Request) {
  //   return this.userService.find({});
  // }

  // @UseGuards(AuthGuard)
  // @Put(['admin/user/password', 'hr/user/password'])
  // async updatePassword(
  //   @Req() request: Request,
  //   @Body('password') password: string,
  //   @Body('passwordConfirm') passwordConfirm: string,
  // ) {
  //   if (password !== passwordConfirm) {
  //     throw new BadRequestException('Password do not match!');
  //   }

  //   const cookie = request.cookies['jwt'];

  //   const { id } = await this.jwtService.verifyAsync(cookie);

  //   await this.userService.update(id, {
  //     password: await hashPassword(password),
  //   });

  //   return this.userService.findOne({ where: { id } });
  // }
}
