import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.OPENAI_API_KEY;
const openai = new OpenAI({
  apiKey: apiKey,
});

export const generateQuestionsController = async (req, res) => {
  const { skills, numberOfQuestion = 1, difficulty } = req.body;

  if (!skills || skills.length === 0) {
    return res.status(400).send({ error: "No skills provided" });
  }
  if (!numberOfQuestion) {
    return res.status(400).send({ error: "Number of Questions not provided" });
  }
  if (!difficulty) {
    return res.status(400).send({ error: "Difficulty not provided" });
  }

  try {
    const questions = await generateQuestions(
      skills,
      numberOfQuestion,
      difficulty
    );
    res.send({ questions });
  } catch (error) {
    console.error("Error generating questions:", error);
    res.status(500).send({ error: error?.toString() });
  }
};

export const generateQuestions = async (
  skill,
  numberOfQuestion,
  difficulty
) => {
  try {
    let skillPrompts = `Generate ${numberOfQuestion} technical problem for ${skill}. Keep difficulty of question as ${difficulty}`;
    // This code can be used when we send multiple skills from FE
    if (Array.isArray(skill)) {
      let skillString = "";
      skill.forEach((s) => {
        if (skill === "") skill = s;
        else skill += `, ${s}`;
      });
      skillPrompts = `Generate ${numberOfQuestion} technical problem for ${skillString}. Keep difficulty of question as ${difficulty}`;
    }

    console.log(skillPrompts);
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `you are a assistant which will help me create questions for the given topic, Just give me the question and answers for the topic do not provide any other data. provide the output data in JSON format where with keys "question" and "answer" so I can parse it easily. always provide an array in json do not return a root object. Provide answer in long & descriptive format, some of them should be long.`,
        },
        {
          role: "user",
          content: skillPrompts,
        },
      ],
      model: "gpt-3.5-turbo",
    });
    return completion?.choices?.map((choice) => choice?.message);
  } catch (err) {
    throw new Error(err);
  }
};

// const skillPrompts = `Skill: ${skill}
//   Questions: ${numberOfQuestion}
//   Difficulty: ${difficulty}`;

// alternate prompt
// content: `Generate technical assessment questions based on the user's selected skills and difficulty level. Provide the specified number of questions with randomly generated answers in formats including short answer, long answer, and multiple-choice questions (MCQs). Transform the Response into a JSON object containing keys: question, answer, option (this will be an array of ojects in case of MCQs otherwise empty) and type_of_question. Do not provide any other data except the JSON object.`,
