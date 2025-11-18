import React from "react";

export default function VehicleForm({ vehicle, index, handleVehicleChange, removeVehicle }) {
  return (
    <div className="vehicle-form">
      <h4>Vehicle {index + 1}</h4>
      <input
        placeholder="Year"
        value={vehicle.year}
        onChange={(e) => handleVehicleChange(index, "year", e.target.value)}
        required
      />
      <input
        placeholder="Make"
        value={vehicle.make}
        onChange={(e) => handleVehicleChange(index, "make", e.target.value)}
        required
      />
      <input
        placeholder="Model"
        value={vehicle.model}
        onChange={(e) => handleVehicleChange(index, "model", e.target.value)}
        required
      />
      <input
        placeholder="VIN"
        value={vehicle.vin}
        onChange={(e) => handleVehicleChange(index, "vin", e.target.value)}
      />
      <input
        placeholder="Garage Address"
        value={vehicle.garageAddress}
        onChange={(e) => handleVehicleChange(index, "garageAddress", e.target.value)}
      />
      <select value={vehicle.usage} onChange={(e)=>handleVehicleChange(index,"usage",e.target.value)}>
        <option value="Pleasure">Pleasure</option>
        <option value="Commute">Commute</option>
        <option value="Business">Business</option>
      </select>
      <input
        placeholder="Annual Mileage"
        value={vehicle.mileage}
        onChange={(e) => handleVehicleChange(index, "mileage", e.target.value)}
      />
      <button type="button" onClick={() => removeVehicle(index)}>Remove Vehicle</button>
    </div>
  );
}
