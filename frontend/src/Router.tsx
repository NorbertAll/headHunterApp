import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { UserRoles } from 'types';
import { RequireAuth } from './contexts/auth/RequireAuth';
import { NotFound } from './components/global/NotFound/NotFound';
import { Unauthorized } from './components/global/Unauthorized';
import { Login } from './components/login/Login';
import { HeaderAppBar } from './components/HeaderAppBar/HeaderAppBar';
import { StudentDetails } from './components/StudentDetails/StudentDetails';

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
          <Route path="/hr/:id" element={<HeaderAppBar />} />
          <Route path="/hr/account/:id" element={<div>Konto HR</div>} />
          <Route path="/hr/student/:id" element={<StudentDetails />} />
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
