const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
});

export const formatCurrency = (value: number) =>
  currencyFormatter.format(value);

export const formatChange = (value: number, suffix = "%") => {
  const prefix = value > 0 ? "+" : value < 0 ? "" : "";
  return `${prefix}${value.toFixed(2)}${suffix}`;
};

// Debounce utility for search and other high-frequency operations
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number,
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

// Data decimation utility for optimizing chart rendering
export const decimateData = <T extends { value: number }>(
  data: T[],
  targetPoints: number = 100,
): T[] => {
  if (data.length <= targetPoints) return data;
  const step = Math.ceil(data.length / targetPoints);
  return data.filter((_, i) => i % step === 0);
};
