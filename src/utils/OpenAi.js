import OpenAI from 'openai';
import { OPENAI_KEY } from './Constants';

export const client = new OpenAI({
  apiKey: OPENAI_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser: true 
});

const response = await client.responses.create({
  model: "gpt-4.1-mini",
  instructions: 'You are a coding assistant that talks like a pirate',
  input: 'Are semicolons optional in JavaScript?',
});

console.log(response.output_text);