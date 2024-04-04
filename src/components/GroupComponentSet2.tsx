import { FunctionComponent } from "react";
import styles from "./GroupComponentSet2.module.css";

const GroupComponentSet2: FunctionComponent = () => {
  return (
    <div className={styles.property1defaultParent}>
      <div className={styles.property1default}>
        <div className={styles.property1defaultChild} />
        <img
          className={styles.goodQualityIcon}
          alt=""
          src="/good-quality@2x.png"
        />
        <div className={styles.life}>Life</div>
      </div>
      <div className={styles.property1variant2}>
        <div className={styles.life}>Life</div>
        <div className={styles.property1variant2Child} />
        <img
          className={styles.goodQualityIcon}
          alt=""
          src="/good-quality@2x.png"
        />
      </div>
    </div>
  );
};

export default GroupComponentSet2;
