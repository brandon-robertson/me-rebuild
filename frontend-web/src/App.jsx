// Import components and router
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx'; // We'll create

// Main app with routes
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        {/* TODO: Add more routes like /map, /trade */}
      </Routes>
    </div>
  );
}

export default App;