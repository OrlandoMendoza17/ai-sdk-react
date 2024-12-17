import { tool } from "ai";
import { z } from "zod";

export const getWeather = tool({
  description: "Get the current weather in a given location",
  parameters: z.object({
    location: z
      .string()
      .describe("City, state, or country to get the weather for"),
  }),
  execute: async ({ location }) => {
    const weatherTypes = ["Sunny", "Rainy"];
    const randomTemp = Math.floor(Math.random() * (35 - -5)) + -5; // Random temp between -5 and 35°C
    const randomWeather =
      weatherTypes[Math.floor(Math.random() * weatherTypes.length)];

    return {
      location,
      temperature: randomTemp,
      weather: randomWeather,
    };
  },
});

export const tools = {
  getWeather,
};
