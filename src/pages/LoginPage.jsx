import Login from 'components/Login';
import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <>
      <h1>LoginPage</h1>
      <Login />
      <p>
        Or <Link to="/register">Register</Link>
      </p>
    </>
  );
}

export default LoginPage;
