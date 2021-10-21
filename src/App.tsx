import React, { ReactElement } from "react";
import { useRecoilState } from "recoil";
import { textState } from "./model/common";
import styles from "./index.scss";

function App(): ReactElement {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event: any) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <h1 className={styles.text}> Hanpyo </h1>
    </div>
  );
}

export default App;
