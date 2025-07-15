// Import React, hooks, and deps
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

// Login component
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/login', { username, password });
      dispatch({ type: 'LOGIN_SUCCESS', payload: { token: res.data.token } });
      // TODO: Redirect to game page
    } catch (err) {
      dispatch({ type: 'LOGIN_FAIL', payload: err.response.data.error });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;