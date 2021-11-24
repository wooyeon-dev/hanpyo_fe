// eslint-disable-next-line camelcase
import { snapshot_UNSTABLE } from "recoil";
import { numState, doubleNumState } from "@/store/common";

describe("Store test common - doubleNumState", () => {
  it("numState값이 변경되면 두배한 수로 변경되어야한다.", () => {
    const snapshot = snapshot_UNSTABLE(({ set }) => set(numState, 20));

    expect(snapshot.getLoadable(doubleNumState).valueOrThrow()).toEqual(40);
  });
});
