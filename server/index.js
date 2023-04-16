const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const app = express();
app.use(bodyParser.json());
app.use(cors());

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

const port = 4000;
app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
