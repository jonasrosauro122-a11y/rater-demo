import React from "react";

export default function ClaimForm({ claim, index, handleClaimChange, removeClaim }) {
  return (
    <div className="claim-form">
      <h4>Claim {index + 1}</h4>
      <input
        type="date"
        placeholder="Date of Loss"
        value={claim.date}
        onChange={(e) => handleClaimChange(index, "date", e.target.value)}
        required
      />
      <input
        placeholder="Type of Loss"
        value={claim.type}
        onChange={(e) => handleClaimChange(index, "type", e.target.value)}
        required
      />
      <input
        placeholder="Amount Paid"
        value={claim.amount}
        onChange={(e) => handleClaimChange(index, "amount", e.target.value)}
        required
      />
      <button type="button" onClick={() => removeClaim(index)}>Remove Claim</button>
    </div>
  );
}
