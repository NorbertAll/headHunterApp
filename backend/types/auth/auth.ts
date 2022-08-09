export enum Role {
  ADMIN = 'admin',
  STUDENT = 'student',
  HR = 'hr',
}

export interface Auth {
  loggedIn: boolean;
  roles: Role[];
}
