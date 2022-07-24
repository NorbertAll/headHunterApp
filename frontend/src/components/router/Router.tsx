import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HeaderAppBar } from 'components/layout/Hr/HeaderAppBar/HeaderAppBar';
import StudentsList from 'components/StudentsList/StudentsList';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* HeaderAppBar need add to routes protected for hr */}
        {/* make HeaderAppBar visible across the app - add guard to redirect to /login if unauthenticated */}
        <Route path="/" element={<HeaderAppBar />}>
          <Route path="/hr/account" element={<div>Konto HR</div>} />
          <Route path="/students" element={<StudentsList />} />
        </Route>
        <Route path="/login" element={<div>Strona Logowania</div>} />
      </Routes>
    </BrowserRouter>
  );
};
