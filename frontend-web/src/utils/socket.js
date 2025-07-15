// Socket.io client setup
import io from 'socket.io-client';

// Connect to backend Socket.io (use env var in production)
const socket = io('http://localhost:5000', {
  auth: { token: localStorage.getItem('token') } // Auth with JWT
});

export default socket;