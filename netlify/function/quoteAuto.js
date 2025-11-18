// quoteAuto.js
const { calculateQuotes } = require("../../src/utils/rating");

exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body);
    const quotes = calculateQuotes("auto", data);
    return { statusCode: 200, body: JSON.stringify(quotes) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
