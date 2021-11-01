import { atom } from "recoil";
import { COMMON_KEY } from "./utils/key";

export const textState = atom<string>({
  key: COMMON_KEY.TEXT_STATE,
  default: ""
});
