import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { UserRoles } from 'types';
import { RequireAuth } from '../../contexts/auth/RequireAuth';
import { NotFound } from '../global/NotFound';
import { Unauthorized } from '../global/Unauthorized';
import { Login } from '../login/Login';


export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* routes protected for admin */}
        <Route element={<RequireAuth allowedRoles={[UserRoles.ADMIN]} />}>
          <Route path="/admin" element={<div>Strona admina</div>} />
        </Route>

        {/* routes protected for hr */}
        <Route element={<RequireAuth allowedRoles={[UserRoles.HR]} />}>
          <Route path="/hr" element={<div>Strona hr</div>} />
        </Route>

        {/* routes protected for student */}
        <Route element={<RequireAuth allowedRoles={[UserRoles.STUDENT]} />}>
          <Route path="/student" element={<div>Strona studenta</div>} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
