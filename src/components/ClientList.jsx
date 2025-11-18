import React, { useState } from "react";
import QuoteFormAuto from "./QuoteFormAuto";
import QuoteFormHome from "./QuoteFormHome";

export default function ClientList({ clients }) {
  const [selectedClient, setSelectedClient] = useState(null);
  const [insuranceType, setInsuranceType] = useState("auto");

  if (clients.length === 0) return <p>No clients yet.</p>;

  return (
    <div>
      <h3>Clients</h3>
      <ul>
        {clients.map((c, i) => (
          <li key={i}>
            {c.firstName} {c.lastName}
            <button onClick={() => {setSelectedClient(c); setInsuranceType("auto")}}>AUTO Quote</button>
            <button onClick={() => {setSelectedClient(c); setInsuranceType("home")}}>HOME Quote</button>
          </li>
        ))}
      </ul>

      {selectedClient && insuranceType === "auto" && (
        <QuoteFormAuto client={selectedClient} />
      )}
      {selectedClient && insuranceType === "home" && (
        <QuoteFormHome client={selectedClient} />
      )}
    </div>
  );
}
