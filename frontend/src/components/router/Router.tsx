import AdminPanel from 'components/AdminPanel/AdminPanel';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Hello World</div>} />
        <Route path="/adminpanel" element={<AdminPanel/>} />
      </Routes>
    </BrowserRouter>
  );
};
