const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Simple route to handle GET requests to the root path
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Route to handle GET requests to /api
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the API!' });
});

// Route to handle POST requests to /data
app.post('/data', (req, res) => {
  const data = req.body;
  res.json({ received: data });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
