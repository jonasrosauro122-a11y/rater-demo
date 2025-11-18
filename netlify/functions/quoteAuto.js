import { calculateQuotes } from "../../src/utils/rating.js";

export async function handler(event) {
  const data = JSON.parse(event.body);
  const quotes = calculateQuotes("auto", data);
  return { statusCode: 200, body: JSON.stringify(quotes) };
}
