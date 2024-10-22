import express from 'express';
import OpenAI from 'openai'; // Importing OpenAI as default
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = 3001;

// Middleware to parse JSON
app.use(express.json());

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Chatbot API!');
});

// Define your /api/chat endpoint here
app.post('/api/chat', async (req, res) => {
  const { prompt } = req.body;
  
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    });

    res.json({ content: response.choices[0].message.content });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
