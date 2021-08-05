
export function groupForecastByDay(day: string): string {
    return day.slice(0, 10);
}

export function getCelsius(temp: number): number {
  const convertedTemp = temp - 273.15; // Kelvin to Celsius
  return Math.floor(convertedTemp);
}

export function getFahrenheit(temp: number): number {
  const convertedTemp = (temp - 273.15) * (9 / 5) + 32; // Kelvin to Fahrenheit
  return Math.floor(convertedTemp);
}
