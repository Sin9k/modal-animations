import React, { useState } from "react";

import commonStyles from "../styles.module.css";
import styles from "./styles.module.css";

export const InfinityLoader = () => {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow((prevValue) => !prevValue);

  return (
    <div className={styles.container}>
      <button className={commonStyles.button} onClick={toggleShow}>
        Toggle animation
      </button>
      {show && (
        <div className={styles.animation}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </div>
  );
};
