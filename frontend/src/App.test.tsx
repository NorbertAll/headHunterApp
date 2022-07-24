import { render } from '@testing-library/react';

import { AuthProvider } from 'components/context/auth/AuthProvider';




import { App } from './App';

test('renders learn react link', () => {
  const { getByText } = render(
    <AuthProvider>
      <App />
    </AuthProvider>,
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
