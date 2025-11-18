import React, { useState } from "react";

export default function QuoteForm({ insuranceType, setQuotes }) {
  const [age, setAge] = useState("");
  const [accidents, setAccidents] = useState(""); // for auto
  const [homeValue, setHomeValue] = useState(""); // for home

  const handleSubmit = async (e) => {
    e.preventDefault();

    let body;
    let endpoint;

    if (insuranceType === "auto") {
      body = { age: Number(age), accidents: Number(accidents) };
      endpoint = "/.netlify/functions/quoteAuto";
    } else {
      body = { homeValue: Number(homeValue) };
      endpoint = "/.netlify/functions/quoteHome";
    }

    const res = await fetch(endpoint, {
      method: "POST",
      body: JSON.stringify(body),
    });

    const data = await res.json();
    setQuotes(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      {insuranceType === "auto" ? (
        <>
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Number of accidents"
            value={accidents}
            onChange={(e) => setAccidents(e.target.value)}
            required
          />
        </>
      ) : (
        <input
          type="number"
          placeholder="Home Value"
          value={homeValue}
          onChange={(e) => setHomeValue(e.target.value)}
          required
        />
      )}
      <button type="submit">Generate Quote</button>
    </form>
  );
}
