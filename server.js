const express = require('express');
const dotenv = require('dotenv');
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'build' directory (for React production build)
app.use(express.static('src'));

// Example route to handle all requests (can be used for server-side rendering or API responses)
app.get('*', (req, res) => {
  // This should handle the root path or serve the React app
  res.send('This is where your React SSR or API response would go.');
});

// Example route to handle a specific path
app.get('/car', (req, res) => {
  // This responds to '/car' path
  async function run() {
  const prompt = "Write a story about an AI and magic"

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

  res.send(text);
});

// API route to get environment variables
app.get('/api/getEnv', (req, res) => {
  res.send({ apiUrl: process.env.API_KEY }); // Changed to API_KEY to match common naming conventions
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
