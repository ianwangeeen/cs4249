import { FunctionComponent } from "react";
import styles from "./GroupComponentSet.module.css";

const GroupComponentSet: FunctionComponent = () => {
  return (
    <div className={styles.property1defaultParent}>
      <div className={styles.property1default}>
        <div className={styles.property1defaultChild} />
        <img className={styles.dogIcon} alt="" src="/dog@2x.png" />
        <div className={styles.pets}>Pets</div>
      </div>
      <div className={styles.property1variant2}>
        <div className={styles.property1variant2Child} />
        <img className={styles.dogIcon} alt="" src="/dog@2x.png" />
        <div className={styles.pets}>Pets</div>
      </div>
    </div>
  );
};

export default GroupComponentSet;
