import { FunctionComponent } from "react";
import styles from "./GroupComponentSet1.module.css";

const GroupComponentSet1: FunctionComponent = () => {
  return (
    <div className={styles.property1defaultParent}>
      <div className={styles.property1default}>
        <div className={styles.ellipseParent}>
          <div className={styles.groupChild} />
          <img
            className={styles.italianPizzaIcon}
            alt=""
            src="/italian-pizza@2x.png"
          />
          <div className={styles.food}>Food</div>
        </div>
      </div>
      <div className={styles.property1variant2}>
        <div className={styles.food1}>Food</div>
        <div className={styles.property1variant2Child} />
        <img
          className={styles.italianPizzaIcon1}
          alt=""
          src="/italian-pizza@2x.png"
        />
      </div>
    </div>
  );
};

export default GroupComponentSet1;
