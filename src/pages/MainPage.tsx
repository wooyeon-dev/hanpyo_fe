import React, { ReactElement } from "react";
import { useRecoilState } from "recoil";
import { textState } from "@/store/common";

function MainPage(): ReactElement {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event: any) => {
    setText(event.target.value);
  };

  return (
    <div>
      <div>Mainpage</div>
      <input type="text" value={text} onChange={onChange} />
    </div>
  );
}

export default MainPage;
