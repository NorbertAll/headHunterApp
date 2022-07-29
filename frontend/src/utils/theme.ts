import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#222225',
      light: '#2a2a2b',
      dark: '#1e1e20',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#666666',
      light: '#9e9e9e',
      dark: '#4d4d4d',
    },
    error: {
      main: '#e02735',
      dark: '#c92929',
    },
    info: {
      main: '#0c8bd4',
      dark: '#162a34',
    },
  },
});
