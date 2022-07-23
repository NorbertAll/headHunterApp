import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HeaderAppBar } from 'components/layout/Hr/HeaderAppBar/HeaderAppBar';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* HeaderAppBar need add to routes protected for hr */}
        <Route path="/hr" element={<HeaderAppBar />} />
        <Route path="/hr/account" element={<div>Konto HR</div>} />
        <Route path="/login" element={<div>Strona Logowania</div>} />
      </Routes>
    </BrowserRouter>
  );
};
