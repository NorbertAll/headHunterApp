import { Auth } from "types";
import { config } from "../../config";

export const loginRequest = async (
  email: string,
  password: string,
): Promise<Auth> => {
  const response = await fetch(`${config.api}/auth/login`, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json() as Auth;
  return data;

  // console.log({ email, password });
  // return Promise.resolve({
  //   accessToken: 'ausyfa76srctaihscj',
  //   roles: [UserRoles.HR],
  // })
};