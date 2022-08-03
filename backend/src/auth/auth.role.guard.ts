import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './auth.role.dekorator';
import { JwtService } from '@nestjs/jwt';
import { UserRoles } from 'types';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector, private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<UserRoles[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredRoles) {
      return true;
    }
    try {
      const { cookies } = context.switchToHttp().getRequest();
      const { scope } = await this.jwtService.verify(cookies.jwt);
      return requiredRoles.some((role) => scope.includes(role));
    } catch (e) {
      return e;
    }
  }
}
