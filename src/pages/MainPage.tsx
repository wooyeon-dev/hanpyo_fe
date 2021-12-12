import React, { ReactElement } from "react";
import Header from "@/components/common/Header";
import styles from "./MainPage.scss";

function MainPage(): ReactElement {
  return (
    <>
      <Header />
      <main>
        <div className={styles.container}>
          <div className={styles.leftWrapper}> left </div>
          <div className={styles.rightWrapper}> right </div>
        </div>
      </main>
    </>
  );
}

export default MainPage;
