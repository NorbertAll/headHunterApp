import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { Role } from 'types';
import { useAuth } from './useAuth';

interface RequireAuthProps {
  allowedRoles: Role[];
}

export const RequireAuth = (props: RequireAuthProps) => {
  const { allowedRoles } = props;
  const { auth } = useAuth();
  const location = useLocation();

  if (auth?.roles?.find((role) => allowedRoles?.includes(role)))
    return <Outlet />;

  if (!auth.loggedIn)
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;

  return <Navigate to="/login" state={{ from: location }} replace />;
};
