import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#222225',
      light: '#2a2a2b',
      dark: '#1e1e20',
      contrastText: '#fff',
    },
    secondary: {
      main: '#0a0a0a',
      light: '#9e9e9e',
      contrastText: '#37c7d7d',
    },
    error: {
      main: '#e02735',
    },
  },
});
