import { calculateQuotes } from "../../src/utils/rating.js";

export async function handler(event) {
  const { age, accidents } = JSON.parse(event.body);

  const quotes = calculateQuotes("auto", { age, accidents });

  return {
    statusCode: 200,
    body: JSON.stringify(quotes),
  };
}
