import React from "react";

export default function DriverForm({ driver, index, handleDriverChange, removeDriver }) {
  return (
    <div className="driver-form">
      <h4>Driver {index + 1}</h4>
      <input
        placeholder="Full Name"
        value={driver.name}
        onChange={(e) => handleDriverChange(index, "name", e.target.value)}
        required
      />
      <input
        type="date"
        placeholder="DOB"
        value={driver.dob}
        onChange={(e) => handleDriverChange(index, "dob", e.target.value)}
        required
      />
      <input
        placeholder="Driver License Number"
        value={driver.licenseNumber}
        onChange={(e) => handleDriverChange(index, "licenseNumber", e.target.value)}
      />
      <input
        placeholder="License State"
        value={driver.licenseState}
        onChange={(e) => handleDriverChange(index, "licenseState", e.target.value)}
      />
      <button type="button" onClick={() => removeDriver(index)}>Remove Driver</button>
    </div>
  );
}
