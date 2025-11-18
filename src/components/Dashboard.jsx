import React, { useState, useEffect } from "react";
import AddClient from "./AddClient";
import ClientList from "./ClientList";

export default function Dashboard({ user, onLogout }) {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const savedClients = JSON.parse(localStorage.getItem("clients")) || [];
    setClients(savedClients);
  }, []);

  const addClient = (client) => {
    const newClients = [...clients, client];
    setClients(newClients);
    localStorage.setItem("clients", JSON.stringify(newClients));
  };

  return (
    <div className="dashboard">
      <h1>Hi {user.firstName}!</h1>
      <button onClick={onLogout}>Logout</button>
      <AddClient addClient={addClient} />
      <ClientList clients={clients} />
    </div>
  );
}
