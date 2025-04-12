import { useEffect, useState } from "react";

export const useLocalStorage = (key, initailValue) => {
  const [value, setValue] = useState(() => {
    const localState = localStorage.getItem(key);
    return localState ? JSON.parse(localState) : initailValue;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};
