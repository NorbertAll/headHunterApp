import { SetMetadata } from '@nestjs/common';
import { UserRoles } from 'types';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: UserRoles[]) => SetMetadata('roles', roles);
