import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authname } from './AuthSlice';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch()

  const loginCrd = {
    username: 'taxiadmin',
    password: '12345',
  };

  const handleLogin = () => {
    if (username === loginCrd.username && password === loginCrd.password) {
      // Successful login
      setErrorMessage('');
      dispatch(authname({username:true}))
      sessionStorage.setItem('bool',"true")
      // Implement your logic here, such as navigating to another page
    } else {
      // Failed login
      setErrorMessage('Invalid username or password');

    }
  };

  return (
    <div className="container">
      <div className="login-form">
        <h2 className="title">Login</h2>
        <input
          className="input1"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="input1"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button1" onClick={handleLogin}>
          Login
        </button>
        {errorMessage && <p className="error">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
