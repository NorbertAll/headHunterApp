export enum UserRoles {
  ADMIN = 'admin',
  STUDENT = 'student',
  HR = 'hr',
}

export interface Auth {
  accessToken: string;
  roles: UserRoles[];
}
