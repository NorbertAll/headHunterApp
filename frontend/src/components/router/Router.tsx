import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Login } from 'components/login/Login';
import { NotFound } from 'components/global/NotFound';
import { RequireAuth } from 'contexts/auth/RequireAuth';
import { UserRoles } from 'contexts/auth/AuthProvider';
import { Unauthorized } from 'components/global/Unauthorized';

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
