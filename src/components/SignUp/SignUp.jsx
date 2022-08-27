import React from 'react';
import Form from 'components/Form';
import { useDispatch } from 'react-redux';
import { setUser } from 'store/slices/userSlice';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
      .cath(() => alert('Invalid user'));
  };

  return <Form title="register" handleClick={handleRegister} />;
}

export default SignUp;
