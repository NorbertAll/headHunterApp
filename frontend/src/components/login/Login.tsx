/* eslint-disable jsx-a11y/anchor-is-valid */
import { LoadingButton } from '@mui/lab';
import { Box, Link, TextField, Stack } from '@mui/material';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth, Role } from 'types';
import { useAuth } from '../../contexts/auth/useAuth';
import { useApi } from '../../hooks/useApi';
import { loginRequest } from './loginApi';

export const Login = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const login = useApi<Auth>(loginRequest);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      login.request(values.email, values.password);
    },
  });

  useEffect(() => {
    if (login.data?.roles?.find((role) => role === Role.ADMIN))
      navigate('/admin');
    else if (login.data?.roles?.find((role) => role === Role.HR))
      navigate('/hr');
    else if (login.data?.roles?.find((role) => role === Role.STUDENT))
      navigate('/student');
    else navigate('/login');
  }, [auth]);

  useEffect(() => {
    if (login.data) setAuth(login.data);
  }, [login.data]);

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
        onSubmit={formik.handleSubmit}
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
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <TextField
          margin="normal"
          fullWidth
          name="password"
          label="Hasło"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <Stack direction="row" justifyContent="space-between">
          <Link href="#" color="grey.50">
            Zapomniałeś hasła?
          </Link>
          <LoadingButton
            color="error"
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            loading={login.loading}
            disabled={login.loading}
          >
            Zaloguj się
          </LoadingButton>
        </Stack>
      </Box>
    </Box>
  );
};
