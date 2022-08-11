import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthRegisterDto } from '../auth/dto/register.dto';
import { UserService } from './user.service';
import { Role } from 'types';
import { hashPassword } from './utils/hash-password';
import { CreatedUserDto } from './dto/created-user.dto';
import { Roles } from '../auth/roles.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post(['register'])
  async register(@Body() body: AuthRegisterDto) {
    const { email, password, passwordConfirm, roles } = body;

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

    if (!roles || !Object.values(Role).includes(roles)) {
      body.roles = Role.STUDENT;
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

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Get('/')
  async getAllUsers(options) {
    return this.userService.find(options);
  }

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
