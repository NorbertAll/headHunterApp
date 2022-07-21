import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {UserModule} from "../user/user.module";
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
      JwtModule.register({
          secret: 'secret',
          signOptions: {expiresIn: '1d'},
      }),
      UserModule
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
