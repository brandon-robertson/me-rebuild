// Import components
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import GalaxyMap from './components/GalaxyMap.jsx';
import Trading from './components/Trading.jsx';

// Main app with routes
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/map" element={<GalaxyMap />} />
        <Route path="/trade" element={<Trading />} />
      </Routes>
    </div>
  );
}

export default App;