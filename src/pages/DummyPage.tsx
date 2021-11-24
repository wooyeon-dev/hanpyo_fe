import React, { ReactElement, ChangeEvent } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { numState, doubleNumState } from "@/store/common";

function DummyPage(): ReactElement {
  const [num, setNum] = useRecoilState(numState);
  const doubleNum = useRecoilValue(doubleNumState);

  const onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    const newNum = parseInt(value, 10);

    setNum(Number.isNaN(newNum) ? 0 : newNum);
  };

  return (
    <div>
      <div>Dummy</div>
      <input type="text" value={num} onChange={onChange} />
      <span>{doubleNum}</span>
    </div>
  );
}

export default DummyPage;
