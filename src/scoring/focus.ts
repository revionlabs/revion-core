export function computeFocusReadiness(input: {
  noiseDb: number;
  aqi: number;
  timeOfDay: number; // 0–23
  capacityLoad: number; // 0–100
}) {
  const noisePenalty = Math.max(0, input.noiseDb - 40) * 0.8;
  const aqiPenalty = input.aqi * 0.1;
  const loadPenalty = input.capacityLoad * 0.3;
  const circadianBoost = input.timeOfDay >= 9 && input.timeOfDay <= 13 ? 12 : 0;

  return Math.max(0, 100 - noisePenalty - aqiPenalty - loadPenalty + circadianBoost);
}
