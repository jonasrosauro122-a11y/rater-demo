import React, { useState } from "react";
import QuoteResult from "./QuoteResult";

export default function QuoteFormHome({ client }) {
  const [homeValue, setHomeValue] = useState(300000);
  const [security, setSecurity] = useState("");
  const [hazards, setHazards] = useState("");
  const [previousCarrier, setPreviousCarrier] = useState("");
  const [quotes, setQuotes] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { homeValue, security, hazards, previousCarrier, hasHome:true };
    const res = await fetch("/.netlify/functions/quoteHome", {
      method: "POST",
      body: JSON.stringify(data)
    });
    const result = await res.json();
    setQuotes(result);
  };

  return (
    <div className="quote-form">
      <h3>HOME Quote for {client.firstName}</h3>
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="Home Value" value={homeValue} onChange={(e)=>setHomeValue(e.target.value)} required/>
        <input placeholder="Security / Fire Protection" value={security} onChange={(e)=>setSecurity(e.target.value)}/>
        <input placeholder="Hazards" value={hazards} onChange={(e)=>setHazards(e.target.value)}/>
        <input placeholder="Previous Insurance Carrier" value={previousCarrier} onChange={(e)=>setPreviousCarrier(e.target.value)}/>
        <button type="submit">Generate Quote</button>
      </form>

      <QuoteResult quotes={quotes}/>
    </div>
  );
}
