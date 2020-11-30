export function calculateDuration (minutes: number) : string {
  const remainder = minutes % 60;
  const hours = (minutes - remainder) / 60;
  return `${hours}h ${remainder}min`
}

export function removePipes (str: string): string {
  return str.split(/\||\s/gm).filter(e => e).join(", ");
}

export function setToCurrency (budget: number): string {
  return new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'USD' }).format(budget);
}