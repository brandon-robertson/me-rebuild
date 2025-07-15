// Import deps
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import socket from '../utils/socket'; // Real-time

// GalaxyMap component
const GalaxyMap = () => {
  const [systems, setSystems] = useState([]);
  const [currentSystem, setCurrentSystem] = useState(null);

  // Fetch systems on mount
  useEffect(() => {
    const fetchSystems = async () => {
      try {
        const res = await axios.get('https://super-acorn-wvr5gpjrxq2vgvw-5000.app.github.dev/api/systems', { // Assume /api/systems endpoint; add to backend if needed
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setSystems(res.data);
      } catch (err) {
        console.error('Error fetching systems:', err);
      }
    };
    fetchSystems();

    // Real-time listener for player moves
    socket.on('playerMoved', (data) => {
      console.log('Player moved:', data);
      // Update map if needed (e.g., refresh systems)
    });

    return () => socket.off('playerMoved'); // Cleanup
  }, []);

  // Handle move click
  const handleMove = async (systemId) => {
    try {
      await axios.post('https://super-acorn-wvr5gpjrxq2vgvw-5000.app.github.dev/api/move', { systemId }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setCurrentSystem(systemId);
    } catch (err) {
      console.error('Move error:', err);
    }
  };

  return (
    <div>
      <h2>Galaxy Map</h2>
      {systems.map((system) => (
        <button key={system.id} onClick={() => handleMove(system.id)}>
          {system.name} ({system.coordsX}, {system.coordsY})
        </button>
      ))}
      {currentSystem && <p>Current System: {currentSystem}</p>}
    </div>
  );
};

export default GalaxyMap;