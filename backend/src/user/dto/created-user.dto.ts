import { Role } from 'types';

export class CreatedUserDto {
  name: string;
  email: string;
  role: Role;

  constructor(name: string, email: string, role: Role) {
    this.name = name;
    this.email = email;
    this.role = role;
  }
}
