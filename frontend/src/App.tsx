import { CssBaseline, ThemeProvider } from '@mui/material';
import { Router } from './Router';
import { AuthProvider } from './contexts/auth/AuthProvider';
import { theme } from './utils/theme';

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
