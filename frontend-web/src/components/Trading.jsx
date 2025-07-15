// Import deps
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Trading component
const Trading = () => {
  const [goods, setGoods] = useState([]);
  const [portId, setPortId] = useState(1); // Placeholder; get from current system

  // Fetch goods at port
  useEffect(() => {
    const fetchGoods = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/port/${portId}/goods`, { // Assume endpoint; add if needed
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setGoods(res.data);
      } catch (err) {
        console.error('Error fetching goods:', err);
      }
    };
    fetchGoods();
  }, [portId]);

  // Handle trade
  const handleTrade = async (goodId, quantity, action) => {
    try {
      await axios.post('http://localhost:5000/api/trade', { portId, goodId, quantity, action }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      // Refresh goods or player credits
    } catch (err) {
      console.error('Trade error:', err);
    }
  };

  return (
    <div>
      <h2>Trading at Port</h2>
      {goods.map((good) => (
        <div key={good.id}>
          {good.name} - Price: {good.price}
          <button onClick={() => handleTrade(good.id, 1, 'buy')}>Buy</button>
          <button onClick={() => handleTrade(good.id, 1, 'sell')}>Sell</button>
        </div>
      ))}
    </div>
  );
};

export default Trading;