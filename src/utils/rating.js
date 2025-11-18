import { carriers } from "../data/carriers";

export function calculateQuotes(type, data) {
  return carriers.map(c => {
    let premium = c.baseRate[type];
    // Apply some adjustments based on accidents, homeValue, etc.
    if(type === "auto" && data.accidents) premium *= 1 + 0.1 * data.accidents;
    if(type === "home" && data.homeValue > 500000) premium *= 1.2;
    return { carrier: c.name, premium: premium.toFixed(2) };
  });
}
