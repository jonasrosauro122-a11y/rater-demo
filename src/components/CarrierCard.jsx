import React from "react";

export default function QuoteResult({ quotes }) {
  if (!quotes || quotes.length === 0) return null;
  return (
    <ul>
      {quotes.map((q, i) => (
        <li key={i}><strong>{q.carrier}</strong>: ${q.premium}</li>
      ))}
    </ul>
  );
}
