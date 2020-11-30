export function calculateDuration (minutes: number) : string {
  const remainder = minutes % 60;
  const hours = (minutes - remainder) / 60;
  return `${hours ?? 0}h ${remainder ?? "00"}min`
}

export function removePipes (str: string): string {
  if (!str) return "";
  return str.split(/\||\s|,/gm).filter(e => e).join(", ");
}

export function setToCurrency (budget: number): string {
  if(!budget) return "0";
  return new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'USD' }).format(budget);
}