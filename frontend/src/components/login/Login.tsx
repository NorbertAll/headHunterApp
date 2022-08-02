/* eslint-disable jsx-a11y/anchor-is-valid */
import { Box, Button, Link, TextField, Stack } from '@mui/material';
import { SyntheticEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth, UserRoles } from 'types';
import { useAuth } from '../../contexts/auth/useAuth';
import { useApi } from '../../hooks/useApi';
import { loginRequest } from './loginApi';

export const Login = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const login = useApi<Auth>(loginRequest);

  useEffect(() => {
    if (login.data?.roles.find((role) => role === UserRoles.ADMIN))
      navigate('/admin');
    else if (login.data?.roles.find((role) => role === UserRoles.HR))
      navigate('/hr/123');
    else if (login.data?.roles.find((role) => role === UserRoles.STUDENT))
      navigate('/student');
    else navigate('/login');
  }, [auth]);

  useEffect(() => {
    if (login.data) setAuth(login.data);
  }, [login.data]);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await login.request();
  };

  if (login.error) console.log(login.error);

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
          <Button
            color="error"
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Zaloguj się
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
