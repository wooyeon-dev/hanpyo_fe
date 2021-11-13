import { atom, selector } from "recoil";
import { COMMON_KEY } from "./constants/key";

export const numState = atom<number>({
  key: COMMON_KEY.NUM_STATE,
  default: 0
});

export const doubleNumState = selector<number>({
  key: COMMON_KEY.DOUBLE_NUM_STATE,
  get: ({ get }) => {
    const num = get(numState);
    const doubleNum = num * 2;

    return doubleNum;
  }
});
