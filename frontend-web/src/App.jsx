// Import components and router
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx'; 
import GalaxyMap from './components/GalaxyMap.jsx';
import Trading from './components/Trading.jsx';
import AdminDashboard from './components/AdminDashboard.jsx';

// Main app with routes
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} /> {/* New route */}
        <Route path="/map" element={<GalaxyMap />} />
        <Route path="/trade" element={<Trading />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
}

export default App;