import { createContext, useState } from 'react';

export enum UserRoles {
  ADMIN = 'admin',
  STUDENT = 'student',
  HR = 'hr',
}

export interface Auth {
  accessToken: string;
  roles: UserRoles[];
}

interface ContextType {
  auth: Auth;
  setAuth: React.Dispatch<React.SetStateAction<Auth>>;
}

interface ProviderProps {
  children: React.ReactNode;
}

const initialContextValue = {
  auth: { accessToken: '', roles: [] },
  setAuth: () => {},
};

export const AuthContext = createContext<ContextType>(initialContextValue);

export const AuthProvider = (props: ProviderProps) => {
  const [auth, setAuth] = useState<Auth>({
    accessToken: '',
    roles: [],
  });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ auth, setAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};