import { FunctionComponent } from "react";
import styles from "./EndScreen.module.css";

const EndScreen: FunctionComponent = () => {
  return (
    <div className={styles.endScreen}>
      <div className={styles.endScreenChild} />
      <div className={styles.postHasBeen}>Post has been created!</div>
      <div className={styles.endScreenItem} />
    </div>
  );
};

export default EndScreen;
