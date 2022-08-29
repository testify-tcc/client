import { useState } from "react";

export function useToggle(initialValue?: boolean): [boolean, () => void] {
  const [value, setValue] = useState(initialValue ?? false);

  const toggle = () => {
    setValue((oldValue) => !oldValue);
  };

  return [value, toggle];
}
