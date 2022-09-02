import { DependencyList, EffectCallback, useEffect, useRef } from "react";

export function useEffectOnlyOnDependenciesUpdate(
  effect: EffectCallback,
  deps: DependencyList,
) {
  const isFirstMount = useRef(true);

  useEffect(() => {
    if (!isFirstMount.current) {
      effect();
    }

    isFirstMount.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
