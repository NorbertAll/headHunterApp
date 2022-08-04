import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Response } from 'express';
import { UserService } from 'src/user/user.service';
import { comparePassword } from 'src/user/utils/hash-password';
import { AuthLoginDto } from './dto/auth-login.dto';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

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

      const token = await this.createToken(await this.generateToken(user));

      return res
        .cookie('jwt', token.accessToken, {
          secure: false,
          domain: 'localhost',
          httpOnly: true,
        })
        .json({ ok: true });
    } catch (e) {
      return res.json({ error: e.message });
    }
  }
}
