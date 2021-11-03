import { atom } from "recoil";
import { COMMON_KEY } from "./constants/key";

export const textState = atom<string>({
  key: COMMON_KEY.TEXT_STATE,
  default: ""
});
