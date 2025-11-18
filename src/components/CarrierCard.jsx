import React from "react";

export default function CarrierCard({ carrier, premium }) {
  return (
    <li>
      <strong>{carrier}</strong>: ${premium}
    </li>
  );
}
