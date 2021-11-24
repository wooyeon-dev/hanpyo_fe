// eslint-disable-next-line camelcase
import { snapshot_UNSTABLE } from "recoil";
import { numState } from "@/store/common";

describe("Store test common - numState", () => {
  it("초기값은 0이어야한다.", () => {
    const snapshot = snapshot_UNSTABLE();

    expect(snapshot.getLoadable(numState).valueOrThrow()).toEqual(0);
  });

  it("숫자타입으로 변경할 수 있다.", () => {
    const snapshot = snapshot_UNSTABLE(({ set }) => set(numState, 20));

    expect(snapshot.getLoadable(numState).valueOrThrow()).toEqual(20);
  });
});
