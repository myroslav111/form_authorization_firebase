import SignUp from 'components/SignUp/SignUp';
import React from 'react';
import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <>
      <h1>RegisterPage</h1>
      <SignUp />
      <p>
        Alredy hahe an account?
        <Link to="/login">Sign in</Link>
      </p>
    </>
  );
}

export default RegisterPage;
