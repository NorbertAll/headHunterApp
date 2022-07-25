import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { Router } from './router/Router';
import { theme } from './utils/theme';

import { store } from './store/store';
import {Router} from "./components/router/Router";

export const App = () => {
    // types from BE to FE testing
    const typesTest: Testing = {
        name: 'john',
        age: 22,
    };
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </Provider>
  );
};
