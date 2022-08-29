import { act, renderHook } from "@testing-library/react";

import { useToggle } from "src/hooks/useToggle";

describe("useToggle", () => {
  it("should have false as initial value", () => {
    const { result } = renderHook(() => useToggle());

    expect(result.current.value).toBe(false);
  });

  it("should toggle the state value", () => {
    const initialValue = false;
    const expectedValue = true;
    const { result } = renderHook(() => useToggle(initialValue));

    act(() => {
      result.current.toggle();
    });

    expect(result.current.value).toBe(expectedValue);
  });
});
