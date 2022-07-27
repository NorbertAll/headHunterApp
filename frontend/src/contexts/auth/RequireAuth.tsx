import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { UserRoles } from 'types';
import { useAuth } from './useAuth';

interface RequireAuthProps {
  allowedRoles: UserRoles[];
}

export const RequireAuth = (props: RequireAuthProps) => {
  const { allowedRoles } = props;
  const { auth } = useAuth();
  const location = useLocation();

  if (auth?.roles?.find((role) => allowedRoles?.includes(role)))
    return <Outlet />;

  if (auth?.accessToken)
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;

  return <Navigate to="/login" state={{ from: location }} replace />;
};
