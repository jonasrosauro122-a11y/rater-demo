import React, { useState } from "react";
import QuoteResult from "./QuoteResult";

export default function QuoteFormAuto({ client }) {
  const [formData, setFormData] = useState({
    dob: "", ssn: "", address: "", phone: "", email: "",
    vehicleYear: "", vehicleMake: "", vehicleModel: "",
    accidents: 0, violations: 0,
  });
  const [quotes, setQuotes] = useState([]);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/.netlify/functions/quoteAuto", {
      method: "POST",
      body: JSON.stringify(formData)
    });
    const data = await res.json();
    setQuotes(data);
  };

  return (
    <div>
      <h4>AUTO Quote for {client.firstName}</h4>
      <form onSubmit={handleSubmit}>
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} placeholder="DOB" required/>
        <input type="text" name="ssn" value={formData.ssn} onChange={handleChange} placeholder="SSN" required/>
        <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" required/>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required/>
        <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required/>

        <input type="number" name="vehicleYear" value={formData.vehicleYear} onChange={handleChange} placeholder="Vehicle Year" required/>
        <input type="text" name="vehicleMake" value={formData.vehicleMake} onChange={handleChange} placeholder="Make" required/>
        <input type="text" name="vehicleModel" value={formData.vehicleModel} onChange={handleChange} placeholder="Model" required/>

        <input type="number" name="accidents" value={formData.accidents} onChange={handleChange} placeholder="Accidents" />
        <input type="number" name="violations" value={formData.violations} onChange={handleChange} placeholder="Violations" />

        <button type="submit">Generate Quote</button>
      </form>

      <QuoteResult quotes={quotes} />
    </div>
  );
}
