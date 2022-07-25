/* eslint-disable jsx-a11y/anchor-is-valid */
import { Box, Button, Link, TextField, Stack } from '@mui/material';
import { SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { Auth, UserRoles } from 'contexts/auth/AuthProvider';
import { useAuth } from 'contexts/auth/useAuth';

const sendLoginRequest = async (
  email: string,
  password: string,
): Promise<Auth> => {
  await setTimeout(() => {
    console.log(email, password);
  }, 2000);

  return {
    accessToken: '1244123asdas',
    roles: [UserRoles.ADMIN, UserRoles.STUDENT, UserRoles.HR],
  };
};

export const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      const loginResponse = await sendLoginRequest('test@email', 'password');
      console.log(loginResponse);
      setAuth(loginResponse);
    } catch (error) {
      console.log(error);
    }

    navigate('/admin');
  };

  return (
    <Box
      height="100vh"
      maxWidth="480px"
      padding="1em"
      margin=" 0 auto"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Box margin="0 auto">
        <img src="/logo.webp" alt="logo" width="100px" />
      </Box>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ mt: 1 }}
        maxWidth={600}
      >
        <TextField
          margin="normal"
          fullWidth
          id="email"
          label="E-mail"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          fullWidth
          name="password"
          label="Hasło"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Stack direction="row" justifyContent="space-between">
          <Link href="#" color="grey.50">
            Zapomniałeś hasła?
          </Link>
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            Zaloguj się
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
