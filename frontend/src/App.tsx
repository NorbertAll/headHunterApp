import { Provider } from 'react-redux';

import { Router } from 'components/router/Router';

import { store } from './store/store';

export const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};
