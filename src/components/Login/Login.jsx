import React from 'react';
import Form from 'components/Form';
import { useDispatch } from 'react-redux';
import { setUser } from 'store/slices/userSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login() {
  const dispatch = useDispatch();

  // console.log(process.env);
  let navigate = useNavigate();
  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        // console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate('/home');
      })
      .catch(() => alert('Invalid user'));
  };
  return <Form title="sign in" handleClick={handleLogin} />;
}

export default Login;
