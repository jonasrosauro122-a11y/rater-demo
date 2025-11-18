import { calculateQuotes } from "../../src/utils/rating.js";

export async function handler(event) {
  const { homeValue } = JSON.parse(event.body);

  const quotes = calculateQuotes("home", { homeValue });

  return {
    statusCode: 200,
    body: JSON.stringify(quotes),
  };
}
