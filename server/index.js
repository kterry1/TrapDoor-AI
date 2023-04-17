const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const app = express();

const productionSite = 'https://trapdoor-ai.herokuapp.com';
const localhost = 'http://localhost:4001';
const allowedOrigins = [productionSite, localhost];
app.use(
  cors({
    origin: function (origin, callback) {
      if (allowedOrigins.indexOf(origin) !== -1 || origin === undefined) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  }),
);
// Parse JSON requests
app.use(express.json());

// Parse URL-encoded requests
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.resolve(__dirname, '../client/dist')));

//endpoint for ChatGPT
app.post('/chat', async (req, res) => {
  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${req.body.prompt} - answer within 3 sentences.`,
    temperature: 0.3,
    max_tokens: 150,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });

  res.send(completion.data.choices[0].text);
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
});

const port = process.env.PORT || 4001;
app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
