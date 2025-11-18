import { carriers } from "../data/carriers";

export function calculateQuotes(insuranceType, details) {
  return carriers.map(carrier => {
    let premium = carrier.baseRate[insuranceType];

    if (insuranceType === "auto") {
      if (details.age < 25) premium *= 1.2;
      if (details.accidents > 0) premium *= 1 + 0.1 * details.accidents;
    } else if (insuranceType === "home") {
      if (details.homeValue > 500000) premium *= 1.2;
    }

    return {
      carrier: carrier.name,
      premium: premium.toFixed(2),
    };
  });
}
