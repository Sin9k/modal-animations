import { useState } from "react";

import { ComplexAnimatedModal } from "../../ComplexAnimatedModal";
import styles from "../styles.module.css";

export const ComplexContent = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <button className={styles.button} onClick={() => setOpened(true)}>
        open complex animation modal
      </button>
      <ComplexAnimatedModal opened={opened} onClose={() => setOpened(false)}>
        <h2 className={styles.modalContent}>Complex animation content</h2>
      </ComplexAnimatedModal>
    </>
  );
};
