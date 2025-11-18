import React from "react";

export default function QuoteResult({ quotes }) {
  if (!quotes) return null;

  return (
    <div className="quote-result">
      <h3>Quotes</h3>
      <ul>
        {quotes.map((q, i) => (
          <li key={i}>{q.carrier}: ${q.premium}</li>
        ))}
      </ul>
    </div>
  );
}
