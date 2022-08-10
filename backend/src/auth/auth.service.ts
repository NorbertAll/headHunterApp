import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { Response } from 'express';
import { v4 as uuid } from 'uuid';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { comparePassword } from 'src/user/utils/hash-password';
import { AuthLoginDto } from './dto/login.dto';
import { JwtPayload } from './jwt.strategy';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private configService: ConfigService,
    private userService: UserService,
  ) {}

  async login(req: AuthLoginDto, res: Response): Promise<any> {
    try {
      const user = await this.userService.findOne({
        where: { email: req.email },
      });

      if (!user) {
        throw new NotFoundException('Nieprawidłowy email lub hasło.');
      }

      if (!(await comparePassword(req.password, user.passwordHash))) {
        throw new BadRequestException('Nieprawidłowy email lub hasło.');
      }

      if (!user.is_active) {
        throw new BadRequestException('Twoje konto nie zostało aktywowane.');
      }

      const token = this.createToken(await this.generateToken(user));

      return res
        .cookie('jwt', token.accessToken, {
          secure: this.configService.get('HTTPS_ENABLED'),
          domain: this.configService.get('DOMAIN'),
          httpOnly: true,
        })
        .json({
          statusCode: 201,
          message: 'Zalogowano pomyślnie',
          loggedIn: true,
          roles: [user.roles],
        });
    } catch (e) {
      return res.status(400).json({
        statusCode: 400,
        message: 'Logowanie nie powiodło się',
        error: e.message,
      });
    }
  }

  async logout(user: User, res: Response) {
    try {
      user.accessToken = null;
      await this.userService.save(user);

      return res
        .clearCookie('jwt', {
          secure: this.configService.get('HTTPS_ENABLED'),
          domain: this.configService.get('DOMAIN'),
          httpOnly: true,
        })
        .json({
          statusCode: 200,
          message: 'Wylogowano pomyślnie',
        });
    } catch (e) {
      return res.status(400).json({
        statusCode: 400,
        message: 'Wylogowanie nie powiodło się',
        error: e.message,
      });
    }
  }

  createToken(currentTokenId: string): {
    accessToken: string;
    expiresIn: number;
  } {
    const payload: JwtPayload = { id: currentTokenId };
    const expiresIn = 60 * 60 * 24;
    const accessToken = sign(payload, this.configService.get('JWT_SECRET'), {
      expiresIn,
    });

    return {
      accessToken,
      expiresIn,
    };
  }

  private async generateToken(user: User): Promise<string> {
    let token;
    let userWithThisToken = null;
    do {
      token = uuid();
      userWithThisToken = await this.userService.findOne({
        accessToken: token,
      });
    } while (!!userWithThisToken);

    user.accessToken = token;
    await this.userService.save(user);

    return token;
  }
}
