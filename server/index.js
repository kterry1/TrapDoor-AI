const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  organization: "org-VVG2wwHRXzoJ3o0jBeC2BtMC",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const app = express();
app.use(bodyParser.json());
app.use(cors());

//endpoint for ChatGPT
app.post("/chat", async (req, res) => {
  console.log(req.body);
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Write a 1 sentence essay about ${req.body.prompt} - explain it to me like I'm 5.`,
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
