import { CssBaseline, ThemeProvider } from '@mui/material';

import { AuthProvider } from 'components/context/auth/AuthProvider';

import { Router } from 'components/router/Router';


import { theme } from 'utils/theme';

export const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </AuthProvider>
  );
};
