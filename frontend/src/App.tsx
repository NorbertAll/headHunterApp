import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Hello World</div>} />
      </Routes>
    </Router>
  );
};
