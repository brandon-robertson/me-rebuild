// Import deps
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

// AdminDashboard component
const AdminDashboard = () => {
  const [seed, setSeed] = useState('');
  const [message, setMessage] = useState('');
  const { token } = useSelector((state) => state.auth);

  // Handle generate click
  const handleGenerate = async () => {
    try {
      const res = await axios.post('/api/admin/generate-galaxy', { seed }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.error || 'Generation failed');
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <input type="text" value={seed} onChange={(e) => setSeed(e.target.value)} placeholder="Galaxy Seed (optional)" />
      <button onClick={handleGenerate}>Generate Galaxy</button>
      <p>{message}</p>
    </div>
  );
};

export default AdminDashboard;