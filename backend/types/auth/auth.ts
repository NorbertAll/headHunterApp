export enum Role {
  ADMIN = 'admin',
  STUDENT = 'student',
  HR = 'hr',
}

export interface Auth {
  accessToken: string;
  roles: Role[];
}
