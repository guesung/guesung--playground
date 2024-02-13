import { useEffect, useState } from "react";

interface UseDeBounceProps {
  data: any;
  delay?: number;
}

export default function useDebounce({ data, delay = 300 }: UseDeBounceProps) {
  const [debouncedValue, setDebouncedValue] = useState();

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(data);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [data, delay]);

  return debouncedValue;
}
