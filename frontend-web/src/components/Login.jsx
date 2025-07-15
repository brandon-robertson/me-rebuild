// Import React, hooks, and deps
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // For redirect
import axios from 'axios';

// Login component
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Hook for navigation
  const { error, isAuthenticated } = useSelector((state) => state.auth); // Get state from Redux

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/login', { username, password });
      dispatch({ type: 'LOGIN_SUCCESS', payload: { token: res.data.token } });
      navigate('/game'); // Redirect to game page on success
    } catch (err) {
      dispatch({ type: 'LOGIN_FAIL', payload: err.response?.data?.error || 'Login failed' });
    }
  };

  // If already authenticated (from state), redirect
  if (isAuthenticated) {
    navigate('/game');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
    </form>
  );
};

export default Login;