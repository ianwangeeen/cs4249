import { FunctionComponent } from "react";
import styles from "./Toggle.module.css";

const Toggle: FunctionComponent = () => {
  return (
    <div className={styles.toggle}>
      <div className={styles.stateoff}>
        <div className={styles.stateoffChild} />
      </div>
      <div className={styles.stateon}>
        <div className={styles.stateoffChild} />
      </div>
    </div>
  );
};

export default Toggle;
