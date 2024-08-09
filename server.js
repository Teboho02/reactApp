const express = require('express');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'build' directory (for React production build)
app.use(express.static('src'));

// Example route to handle all requests (can be used for server-side rendering or API responses)
app.get('/', (req, res) => {
  // This should handle the root path or serve the React app
  res.send('This is where your React SSR or API response would go.');
});

// Example route to handle a specific path
app.get('/car', (req, res) => {
  // This responds to '/car' path
  res.send('world');
});

// API route to get environment variables
app.get('/api/getEnv', (req, res) => {
  res.send({ apiUrl: process.env.API_KEY }); // Changed to API_KEY to match common naming conventions
});

app.get('/new-page', (req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Page</title>
      </head>
      <body>
        <h1>This is the new page!</h1>
        <button id="go-back">Go Back</button>
        <script>
          document.getElementById('go-back').addEventListener('click', () => {
            window.history.back();
          });
        </script>
      </body>
      </html>
    `);
  });
  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
