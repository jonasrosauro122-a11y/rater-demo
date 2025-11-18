import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

export default function App() {
  const [insuranceType, setInsuranceType] = useState("auto");
  const [user, setUser] = useState(null); // null = not logged in

  const handleLogin = (userData) => {
    setUser(userData);
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="app">
      <h1>Welcome, {user.firstName} {user.lastName}!</h1>

      <div className="insurance-type">
        <button onClick={() => setInsuranceType("auto")}>AUTO</button>
        <button onClick={() => setInsuranceType("home")}>HOME</button>
      </div>

      <Dashboard insuranceType={insuranceType} />
    </div>
  );
}
