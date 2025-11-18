// netlify/functions/quoteHome.js
exports.handler = async (event) => {
  const carriers = [
    { name: "Carrier A", baseRate: 1000 },
    { name: "Carrier B", baseRate: 950 },
    { name: "Carrier C", baseRate: 1100 }
  ];

  try {
    const data = JSON.parse(event.body);
    const quotes = carriers.map(c => {
      let premium = c.baseRate;
      premium *= 1 + (data.homeValue > 500000 ? 0.2 : 0);
      premium *= data.hasAuto && data.hasHome ? 0.9 : 1; // multi-line discount
      return { carrier: c.name, premium: premium.toFixed(2) };
    });

    return { statusCode: 200, body: JSON.stringify(quotes) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
