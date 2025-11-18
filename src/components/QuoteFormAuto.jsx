const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch("/.netlify/functions/quoteAuto", {
      method: "POST",
      body: JSON.stringify({ drivers, vehicles, claims, hasTeenDriver, hasAuto:true })
    });
    if (!res.ok) throw new Error("Failed to fetch quotes");
    const result = await res.json();
    setQuotes(result);
  } catch (err) {
    console.error(err);
    alert("Quote generation failed: " + err.message);
  }
};
