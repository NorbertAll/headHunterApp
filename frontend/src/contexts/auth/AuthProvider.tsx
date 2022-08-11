import { createContext, useState } from 'react';
import { Auth } from 'types';

interface ContextType {
  auth: Auth;
  setAuth: React.Dispatch<React.SetStateAction<Auth>>;
}

interface ProviderProps {
  children: React.ReactNode;
}

const initialContextValue = {
  auth: { loggedIn: false, roles: [] },
  setAuth: () => {},
};

export const AuthContext = createContext<ContextType>(initialContextValue);

export const AuthProvider = (props: ProviderProps) => {
  const [auth, setAuth] = useState<Auth>({
    loggedIn: false,
    roles: [],
  });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ auth, setAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};
