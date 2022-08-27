import React from 'react';
import { useDispatch } from 'react-redux';
// import { useAuth } from 'hooks/use-auth';
import { removeUser } from '../store/slices/userSlice';
import { useSelector } from 'react-redux';

function HomePage() {
  const dispatch = useDispatch();
  const { email } = useSelector(state => state.user);
  // const { isAuth, email } = useAuth;
  return (
    <div>
      <h1>Welcome: {email}</h1>

      <button onClick={() => dispatch(removeUser())}>
        Log out from {email}
      </button>
    </div>
  );
}

export default HomePage;
