import { Groq } from "groq-sdk";
import { GROQ_KEY } from "./Constants";

export const groq = new Groq({
  apiKey: GROQ_KEY,
  dangerouslyAllowBrowser: true
});