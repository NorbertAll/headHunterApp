import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class PasswordProtectGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const goodPass = this.reflector.get<string>(
      'PasswordProtect1234',
      context.getHandler(),
    );
    return request.headers['x-password'] === goodPass;
  }
}
