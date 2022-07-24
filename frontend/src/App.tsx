import { Provider } from 'react-redux';
import { Testing } from 'types';
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
      <Router />
    </Provider>
  );
};
