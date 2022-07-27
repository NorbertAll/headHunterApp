import { SetMetadata } from '@nestjs/common';

export const UsePassword = (pass: string) =>
  SetMetadata('PasswordProtect1234', pass);
