/* eslint-disable jsx-a11y/anchor-is-valid */
import { Box, Button, Link, TextField, Typography, Stack } from '@mui/material';

export const Login = () => {
  const handleSubmit = () => {};

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
        <Box width="100%" textAlign="right">
          <Link href="#" color="grey.50">
            Zapomniałeś hasła?
          </Link>
        </Box>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="body1">
            Nie masz konta?
            <Link marginLeft=".4em" href="#" color="grey.50">
              Zarejestruj się
            </Link>
          </Typography>
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            Zaloguj się
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
