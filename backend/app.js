// Import required modules
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const http = require('http'); // For Socket.io integration
const socketIo = require('socket.io');

// Initialize Express app and Prisma client
const app = express();
const prisma = new PrismaClient();
const server = http.createServer(app); // Create HTTP server for Socket.io
const io = socketIo(server, { 
  cors: { origin: '*' } // Allow all origins for dev; restrict in production
});

// Middleware setup
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS for frontend

// JWT secret key (use env var in production)
const JWT_SECRET = 'J5f#s9ff@#xdfr543!'; // Change this to a secure random string

// Authentication middleware to protect routes
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Extract Bearer token
  if (!token) return res.status(401).json({ error: 'No token provided' });
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Attach user data to request
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Register route: Create new user
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: 'Missing fields' });
  const hashed = await bcrypt.hash(password, 10); // Hash password
  try {
    const user = await prisma.user.create({ data: { username, password: hashed } });
    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (e) {
    res.status(400).json({ error: e.message }); // e.g., duplicate username
  }
});

// Login route: Authenticate user
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await prisma.user.findUnique({ where: { username } });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

// Get player data (protected)
app.get('/api/player', authMiddleware, async (req, res) => {
  const player = await prisma.player.findFirst({ where: { userId: req.user.id } });
  if (!player) return res.status(404).json({ error: 'Player not found' });
  res.json(player);
});

// Get all systems
app.get('/api/systems', authMiddleware, async (req, res) => {
  const systems = await prisma.system.findMany();
  res.json(systems);
});

// Move to system (protected; basic validation)
app.post('/api/move', authMiddleware, async (req, res) => {
  const { systemId } = req.body;
  const player = await prisma.player.findFirst({ where: { userId: req.user.id } });
  if (!player) return res.status(404).json({ error: 'Player not found' });
  // TODO: Add fuel check, adjacency validation from original logic
  await prisma.player.update({ where: { id: player.id }, data: { currentSystemId: systemId } });
  io.emit('playerMoved', { playerId: player.id, newSystemId: systemId }); // Real-time broadcast
  res.json({ message: 'Moved successfully' });
});

// Trade at port (protected; basic)
app.post('/api/trade', authMiddleware, async (req, res) => {
  const { portId, goodId, quantity, action } = req.body; // action: 'buy' or 'sell'
  const player = await prisma.player.findFirst({ where: { userId: req.user.id } });
  // TODO: Implement full trade logic (prices, inventory updates) from original
  // For now, placeholder response
  res.json({ message: `${action} completed for ${quantity} of good ${goodId}` });
});

// Admin: Generate galaxy (protected; procedural like original)
app.post('/api/admin/generate-galaxy', authMiddleware, async (req, res) => {
  const user = await prisma.user.findUnique({ where: { id: req.user.id } });
  if (!user.admin) return res.status(403).json({ error: 'Admin only' });
  const seed = req.body.seed || Math.random(); // Use seed for reproducibility
  // TODO: Procedural generation logic (create systems, balance races, ports)
  // For placeholder: Create 10 systems
  for (let i = 0; i < 10; i++) {
    await prisma.system.create({
      data: { name: `System ${i}`, coordsX: i * 10, coordsY: i * 10, raceType: 'Neutral' }
    });
  }
  res.json({ message: 'Galaxy generated' });
});

// Socket.io setup for real-time (chat, combat, etc.)
io.on('connection', (socket) => {
  console.log('User connected');
  // Authenticate socket with JWT
  const token = socket.handshake.auth.token;
  if (!token) return socket.disconnect();
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    socket.userId = decoded.id;
  } catch (err) {
    return socket.disconnect();
  }

  // Join global chat room
  socket.join('global');

  // Handle chat messages
  socket.on('sendMessage', (data) => {
    const { channel, message } = data;
    io.to(channel).emit('newMessage', { userId: socket.userId, message, timestamp: Date.now() });
  });

  socket.on('disconnect', () => console.log('User disconnected'));
});

// Start server
const PORT = 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));