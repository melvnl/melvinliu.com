import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({
  apiKey: process.env.OPENAI_API,
});

const openAI = new OpenAIApi(config);

export default openAI;
