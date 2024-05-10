const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("Genie GPT Home Route");
});

app.post("/genie", async (req, res) => {
  let { prompt } = req.body;
  const genAI = new GoogleGenerativeAI(process.env.API_KEY);
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  res.status(200).send({ text: text });
});

app.listen(8000, () => {
  console.log("App started on port 8000");
});
