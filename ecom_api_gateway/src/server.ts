// src/server.ts
import http from 'http';
import app from './app';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;

// Create an HTTP server
const server = http.createServer(app);

// Start server
server.listen(PORT, () => {
  console.log(`API Gateway is running on http://localhost:${PORT}`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('Shutting down the server...');
  server.close(() => {
    console.log('Server has been shut down.');
    process.exit(0);
  });
});
