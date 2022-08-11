import { Auth } from 'types';
import { config } from '../../config';

export const loginRequest = async (
  email: string,
  password: string,
): Promise<Auth> => {
  const response = await fetch(`${config.api}/auth/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  const data = (await response.json()) as Auth;
  return data;
};
