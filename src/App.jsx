import React, { useState } from "react";
import Dashboard from "./components/Dashboard";

export default function App() {
  const [insuranceType, setInsuranceType] = useState("auto");

  return (
    <div className="app">
      <h1>Rater Demo Simulator</h1>

      <div className="insurance-type">
        <button onClick={() => setInsuranceType("auto")}>AUTO</button>
        <button onClick={() => setInsuranceType("home")}>HOME</button>
      </div>

      <Dashboard insuranceType={insuranceType} />
    </div>
  );
}
