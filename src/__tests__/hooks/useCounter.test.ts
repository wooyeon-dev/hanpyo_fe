import { renderHook, act } from "@testing-library/react-hooks";
import useCounter from "@/hooks/useCounter";

describe("Custom hook test - useCounter", () => {
  it("increment 함수를 호출하면 count 값이 증가되어야한다.", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
      result.current.increment();
      result.current.increment();
    });

    expect(result.current.count).toBe(3);
  });
});
