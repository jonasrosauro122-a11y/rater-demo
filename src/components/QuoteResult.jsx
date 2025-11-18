import React from "react";
import CarrierCard from "./CarrierCard";

export default function QuoteResult({ quotes }) {
  if (!quotes || quotes.length === 0) return null;

  return (
    <ul>
      {quotes.map((quote, index) => (
        <CarrierCard key={index} carrier={quote.carrier} premium={quote.premium} />
      ))}
    </ul>
  );
}
