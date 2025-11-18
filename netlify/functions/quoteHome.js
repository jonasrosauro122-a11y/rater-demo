const { calculateQuotes } = require("../../src/utils/rating");

exports.handler = async (event) => {
  const data = JSON.parse(event.body);
  const quotes = calculateQuotes("home", data);
  return { statusCode: 200, body: JSON.stringify(quotes) };
};
