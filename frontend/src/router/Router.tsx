import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorPage } from '../views/ErrorPage/ErrorPage';

import { HeaderAppBar } from '../components/HeaderAppBar/HeaderAppBar';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* HeaderAppBar need add to routes protected for hr */}
        <Route path="/hr/:id" element={<HeaderAppBar />} />
        <Route path="/hr/account/:id" element={<div>Konto HR</div>} />
        <Route path="/login" element={<div>Strona Logowania</div>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
