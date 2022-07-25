import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { Router } from './router/Router';
import { theme } from './utils/theme';

import { store } from './store/store';

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </Provider>
  );
};
