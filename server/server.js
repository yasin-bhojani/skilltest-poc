const express = require("express");
const axios = require("axios");
const morgan = require("morgan");
const cors = require("cors");
const openAI = require("openai");

require("dotenv").config();

const app = express();
const port = 8080;

app.use(cors("*"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

const openai = new openAI({
  organization: "org-EBEA1V1A2STvmOcFgHro4PET",
  // project: "$PROJECT_ID",
});

app.post("/generate-questions", async (req, res) => {
  const { skills } = req.body;
  console.log("skills", skills);

  if (!skills || skills.length === 0) {
    return res.status(400).send({ error: "No skills provided" });
  }

  try {
    const questions = await generateQuestions(skills);
    res.send({ questions });
  } catch (error) {
    console.error("Error generating questions:", error);
    res.status(500).send({ error: "Error generating questions" });
  }
});

async function generateQuestions(skill) {
  const apiKey = process.env.OPENAI_API_KEY;
  const skillPrompts = `Generate a technical question for ${skill}`;

  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: skillPrompts }],
      temperature: 1,
    },
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data.choices.map((choice) => choice.text.trim());
}
// async function generateQuestions(skills) {
//   const apiKey = process.env.OPENAI_API_KEY;
//   const skillPrompts = skills
//     .map((skill) => `Generate a technical question for ${skill}`)
//     .join("\n");

//   const response = await axios.post(
//     "https://api.openai.com/v1/engines/davinci-codex/completions",
//     {
//       prompt: skillPrompts,
//       max_tokens: 100,
//       n: skills.length,
//       stop: null,
//     },
//     {
//       headers: {
//         Authorization: `Bearer ${apiKey}`,
//         "Content-Type": "application/json",
//       },
//     }
//   );

//   return response.data.choices.map((choice) => choice.text.trim());
// }

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
