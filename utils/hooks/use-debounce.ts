import { useEffect, useState } from "react";

type Primitive = null | undefined | string | number | boolean | symbol | bigint;

export const useDebounce = <TValue extends Primitive>(
  value: TValue,
  delay: number
): TValue => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = window.setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      window.clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
