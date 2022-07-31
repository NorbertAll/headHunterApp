import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {UserModule} from "../user/user.module";
import { JwtModule } from '@nestjs/jwt';
import {APP_GUARD} from "@nestjs/core";
import {RolesGuard} from "./auth.role.guard";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Auth} from "./entities/auth.entity";

@Module({
  imports: [
      TypeOrmModule.forFeature([Auth]),
      JwtModule.register({
          secret: 'secret',
          signOptions: {expiresIn: '1d'},
      }),
      UserModule
  ],
  controllers: [AuthController],
  providers: [AuthService,RolesGuard,
      {
          provide: APP_GUARD,
          useClass: RolesGuard,
      },],
})
export class AuthModule {}