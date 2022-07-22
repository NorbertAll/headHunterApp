import { CssBaseline, ThemeProvider } from '@mui/material';

import { Router } from 'components/router/Router';
import { theme } from 'utils/theme';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
};
