import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { UserService } from '../user/user.service';
import { User } from '../user/entities/user.entity';

export interface JwtPayload {
  id: string;
}

function cookieExtractor(req: any): null | string {
  return req && req.cookies ? req.cookies?.jwt ?? null : null;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      jwtDromRequest: cookieExtractor,
      secretOrKey: 'Sekret Do zmiany!!!!', //TODO dodać secret ze zmiennych środowiskowych lub pliku config
    });
  }

  async validate(payload: JwtPayload, done: (err, user) => void) {
    if (!payload || !payload.id) {
      return done(new UnauthorizedException(), false);
    }

    const user = await this.userService.findOne({
      token: payload.id,
    });

    if (!user) {
      return done(new UnauthorizedException(), false);
    }

    done(null, user);
  }
}
