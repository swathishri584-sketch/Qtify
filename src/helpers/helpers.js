import { useEffect, useState } from "react";

export const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};

export const truncate = (text, maxLength) => {
  if (!text) return "";

  if (text.length <= maxLength) {
    return text;
  }

  return text.substring(0, maxLength) + "...";
};