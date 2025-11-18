import React, { useState } from "react";
import QuoteForm from "./QuoteForm";
import QuoteResult from "./QuoteResult";

export default function Dashboard({ insuranceType }) {
  const [quotes, setQuotes] = useState([]);

  return (
    <div className="dashboard">
      <h2>{insuranceType.toUpperCase()} Quotes</h2>

      <QuoteForm
        insuranceType={insuranceType}
        setQuotes={setQuotes}
      />

      <QuoteResult quotes={quotes} />
    </div>
  );
}
