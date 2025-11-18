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
    <div className="add-client">
      <h3>Add Client</h3>
      <form onSubmit={handleSubmit}>
        <input placeholder="First Name" value={firstName} onChange={(e)=>setFirstName(e.target.value)} required/>
        <input placeholder="Last Name" value={lastName} onChange={(e)=>setLastName(e.target.value)} required/>
        <button type="submit">Add Client</button>
      </form>
    </div>
  );
}
