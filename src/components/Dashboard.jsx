import React, { useState } from "react";
import ClientList from "./ClientList";
import AddClient from "./AddClient";

export default function Dashboard({ user }) {
  const [clients, setClients] = useState([]);

  const addClient = (client) => setClients([...clients, client]);

  return (
    <div className="dashboard">
      <h1>Hi {user.firstName}!</h1>
      <AddClient addClient={addClient} />
      <ClientList clients={clients} />
    </div>
  );
}
