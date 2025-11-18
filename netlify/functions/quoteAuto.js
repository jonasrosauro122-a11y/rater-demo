// netlify/functions/quoteAuto.js
exports.handler = async (event) => {
  const carriers = [
    { name: "Carrier A", baseRate: 500 },
    { name: "Carrier B", baseRate: 550 },
    { name: "Carrier C", baseRate: 600 }
  ];

  try {
    const data = JSON.parse(event.body);
    const quotes = carriers.map(c => {
      let premium = c.baseRate;
      premium *= 1 + 0.1 * (data.drivers?.length || 0);
      premium *= 1 + 0.05 * (data.vehicles?.length || 0);
      premium *= data.hasTeenDriver ? 1.2 : 1;
      premium *= data.hasAuto && data.hasHome ? 0.9 : 1; // multi-line discount
      return { carrier: c.name, premium: premium.toFixed(2) };
    });

    return { statusCode: 200, body: JSON.stringify(quotes) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
