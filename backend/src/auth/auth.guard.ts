import {CanActivate, ExecutionContext, Injectable} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";
import {UserService} from "../user/user.service";

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(
        private jwtService: JwtService,
    ) {
    }

    async canActivate(context: ExecutionContext) {
        const req = context.switchToHttp().getRequest();

        try {
            const jwt = req.cookies['jwt'];
            const {scope} = await this.jwtService.verify(jwt);

            const userRole = req.path.toString().indexOf('/hr') >= 0;
            const userRoleAdmin = req.path.toString().indexOf('/admin') >= 0;
            return userRole && scope === 'hr' || (!userRole && !userRoleAdmin) && scope === 'student' || userRoleAdmin && scope === 'admin';

        }
        catch (e) {
            return false;
        }
    }

}