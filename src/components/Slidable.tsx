import { FunctionComponent } from "react";
import styles from "./Slidable.module.css";

const Slidable: FunctionComponent = () => {
  return (
    <div className={styles.slidable}>
      <div className={styles.popup}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.groupItem} />
          <div className={styles.takePhotosOr}>Take Photos or Video</div>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupInner} />
            <div className={styles.addMediaFrom}>Add media from gallery</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slidable;
