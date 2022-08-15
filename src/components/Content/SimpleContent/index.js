import { useState } from "react";

import { SimpleAnimatedModal } from "../../SimpleAnimatedModal";
import styles from "../styles.module.css";

export const SimpleContent = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <button className={styles.button} onClick={() => setOpened(true)}>
        open simple animation modal
      </button>
      <SimpleAnimatedModal opened={opened} onClose={() => setOpened(false)}>
        <h2 className={styles.modalContent}>Simple animation content</h2>
      </SimpleAnimatedModal>
    </>
  );
};
