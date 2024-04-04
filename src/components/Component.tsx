import { FunctionComponent } from "react";
import styles from "./Component.module.css";

const Component: FunctionComponent = () => {
  return (
    <div className={styles.component1}>
      <div className={styles.property1default}>
        <div className={styles.public}>Public</div>
        <div className={styles.nus}>NUS</div>
        <div className={styles.communities}>Communities</div>
        <div className={styles.toggle}>
          <div className={styles.toggleChild} />
        </div>
        <div className={styles.toggle1}>
          <div className={styles.toggleChild} />
        </div>
        <div className={styles.toggle2}>
          <div className={styles.toggleChild} />
        </div>
      </div>
      <div className={styles.property1variant2}>
        <div className={styles.public1}>Public</div>
        <div className={styles.nus1}>NUS</div>
        <div className={styles.communities1}>Communities</div>
        <div className={styles.toggle3}>
          <div className={styles.toggleChild} />
        </div>
        <div className={styles.toggle4}>
          <div className={styles.toggleChild} />
        </div>
        <div className={styles.toggle5}>
          <div className={styles.toggleChild} />
        </div>
        <img className={styles.plusMathIcon} alt="" src="/plus-math@2x.png" />
        <div className={styles.ellipseParent}>
          <div className={styles.instanceChild} />
          <img className={styles.dogIcon} alt="" src="/dog@2x.png" />
          <div className={styles.pets}>Pets</div>
        </div>
        <div className={styles.property1variant2Inner}>
          <div className={styles.ellipseGroup}>
            <div className={styles.groupChild} />
            <img
              className={styles.italianPizzaIcon}
              alt=""
              src="/italian-pizza@2x.png"
            />
            <div className={styles.food}>Food</div>
          </div>
        </div>
        <div className={styles.ellipseContainer}>
          <div className={styles.instanceChild} />
          <img className={styles.dogIcon} alt="" src="/good-quality@2x.png" />
          <div className={styles.life}>Life</div>
        </div>
      </div>
    </div>
  );
};

export default Component;
