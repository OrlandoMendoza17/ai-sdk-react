import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { tools } from "@/ai/tools";
export const maxDuration = 30;

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

if (!OPENAI_API_KEY) {
  throw new Error("OPENAI_API_KEY is not set");
}

export async function POST(req: Request) {
  const { messages } = await req.json();

  console.log("OPENAI_API_KEY", OPENAI_API_KEY);

  const result = streamText({
    model: openai("gpt-3.5-turbo"),
    system: "You are a helpful assistant.",
    messages,
    tools,
  });

  console.log("result", result);
  return result.toDataStreamResponse();
}
