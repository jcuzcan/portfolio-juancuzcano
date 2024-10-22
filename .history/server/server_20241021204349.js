// server.js (or in an Express route)
const express = require('express');
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const app = express();
const port = 3001;

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const { prompt } = req.body;
  
  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    });

    res.json(response.data.choices[0].message);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error communicating with OpenAI API');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
