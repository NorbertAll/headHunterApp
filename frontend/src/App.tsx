import { Provider } from 'react-redux';

import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

import { Router } from 'components/router/Router';

import { store } from './store/store';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </Provider>
  );
};
