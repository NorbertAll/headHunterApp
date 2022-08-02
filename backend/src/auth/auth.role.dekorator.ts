import { SetMetadata } from '@nestjs/common';
import {UserRoles} from "../user/entities/user.entity";


export const ROLES_KEY = 'roles';
export const Roles = (...roles: UserRoles[]) => SetMetadata('roles', roles);