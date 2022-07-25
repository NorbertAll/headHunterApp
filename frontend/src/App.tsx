import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';


import { theme } from './utils/theme';

import { store } from './store/store';
import { Router } from './router/Router';


export const App = () => {
    // types from BE to FE testing
  
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </Provider>
  );
};
