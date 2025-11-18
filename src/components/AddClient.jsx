import React, { useState } from "react";

export default function AddClient({ addClient }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addClient({ firstName, lastName });
    setFirstName(""); setLastName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Client</h3>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <button type="submit">Add Client</button>
    </form>
  );
}
