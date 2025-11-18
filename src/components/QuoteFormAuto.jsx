import React, { useState } from "react";
import DriverForm from "./DriverForm";
import VehicleForm from "./VehicleForm";
import ClaimForm from "./ClaimForm";
import QuoteResult from "./QuoteResult";

export default function QuoteFormAuto({ client }) {
  const [drivers, setDrivers] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [claims, setClaims] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [hasTeenDriver, setHasTeenDriver] = useState(false);

  const handleDriverChange = (index, field, value) => {
    const newDrivers = [...drivers];
    newDrivers[index][field] = value;
    setDrivers(newDrivers);
  };
  const addDriver = () => setDrivers([...drivers, { name: "", dob: "", licenseNumber: "", licenseState: "" }]);
  const removeDriver = (index) => setDrivers(drivers.filter((_, i) => i !== index));

  const handleVehicleChange = (index, field, value) => {
    const newVehicles = [...vehicles];
    newVehicles[index][field] = value;
    setVehicles(newVehicles);
  };
  const addVehicle = () => setVehicles([...vehicles, { year: "", make: "", model: "", vin: "", usage: "", garageAddress: "", mileage: "" }]);
  const removeVehicle = (index) => setVehicles(vehicles.filter((_, i) => i !== index));

  const handleClaimChange = (index, field, value) => {
    const newClaims = [...claims];
    newClaims[index][field] = value;
    setClaims(newClaims);
  };
  const addClaim = () => setClaims([...claims, { date: "", type: "", amount: "" }]);
  const removeClaim = (index) => setClaims(claims.filter((_, i) => i !== index));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { drivers, vehicles, claims, hasTeenDriver, hasAuto:true };
    const res = await fetch("/.netlify/functions/quoteAuto", {
      method: "POST",
      body: JSON.stringify(data)
    });
    const result = await res.json();
    setQuotes(result);
  };

  return (
    <div className="quote-form">
      <h3>AUTO Quote for {client.firstName}</h3>
      <form onSubmit={handleSubmit}>
        <button type="button" onClick={addDriver}>Add Driver</button>
        {drivers.map((d,i)=>(
          <DriverForm key={i} driver={d} index={i} handleDriverChange={handleDriverChange} removeDriver={removeDriver}/>
        ))}

        <button type="button" onClick={addVehicle}>Add Vehicle</button>
        {vehicles.map((v,i)=>(
          <VehicleForm key={i} vehicle={v} index={i} handleVehicleChange={handleVehicleChange} removeVehicle={removeVehicle}/>
        ))}

        <button type="button" onClick={addClaim}>Add Claim</button>
        {claims.map((c,i)=>(
          <ClaimForm key={i} claim={c} index={i} handleClaimChange={handleClaimChange} removeClaim={removeClaim}/>
        ))}

        <label>
          <input type="checkbox" checked={hasTeenDriver} onChange={(e)=>setHasTeenDriver(e.target.checked)}/>
          Teen Driver Present
        </label>

        <button type="submit">Generate Quote</button>
      </form>

      <QuoteResult quotes={quotes}/>
    </div>
  );
}
