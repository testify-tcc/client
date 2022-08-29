import { useState } from "react";

type UseToggleHookReturn = {
  value: boolean;
  toggle: () => void;
};

export function useToggle(initialValue?: boolean): UseToggleHookReturn {
  const [value, setValue] = useState(initialValue ?? false);

  const toggle = () => {
    setValue((oldValue) => !oldValue);
  };

  return { value, toggle };
}
