import PrivateRoute from 'components/PrivateRoute';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      {' '}
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/home" element={<HomePage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
};
