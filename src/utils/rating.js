import { carriers } from "../data/carriers";

export function calculateQuotes(type, data) {
  return carriers.map(c => {
    let premium = c.baseRate[type];

    if (type === "auto") {
      premium *= 1 + 0.1 * (data.drivers?.length || 0);
      premium *= 1 + 0.05 * (data.vehicles?.length || 0);
      premium *= data.hasTeenDriver ? 1.2 : 1;
    }

    if (type === "home") {
      premium *= 1 + (data.homeValue > 500000 ? 0.2 : 0);
    }

    if (data.hasAuto && data.hasHome) premium *= 0.9; // multi-line discount

    return { carrier: c.name, premium: premium.toFixed(2) };
  });
}
