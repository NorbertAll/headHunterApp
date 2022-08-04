import * as bcrypt from 'bcrypt';

export const hashPassword = async (plainPassword: string): Promise<string> => {
  const hash = await bcrypt.hash(plainPassword, 10);
  return hash;
};

export const comparePassword = async (
  plainPassword: string,
  hash: string,
): Promise<boolean> => {
  const result = await bcrypt.compare(plainPassword, hash);
  return result;
};
