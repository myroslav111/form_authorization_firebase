import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
// import { useAuth } from '../../hooks/use-auth';
import { useSelector } from 'react-redux';

function PrivateRoute() {
  // const { isAuth, email } = useAuth;
  const { token } = useSelector(state => state.user);
  console.log(token);
  return token ? <Outlet /> : <Navigate to="/login" replace />;
}

export default PrivateRoute;
