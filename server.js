const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'build' directory (if any)
app.use(express.static('build'));

// Example route (API or rendering)
app.get('*', (req, res) => {
  // Render React app or handle API requests
  res.send('This is where your React SSR or API response would go.');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
