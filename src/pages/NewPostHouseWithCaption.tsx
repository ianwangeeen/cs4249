import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NewPostHouseWithCaption.module.css";

const NewPostHouseWithCaption: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/end-screen");
  }, [navigate]);

  return (
    <div className={styles.newPostHouseWithCaption}>
      <div className={styles.newPostHouseWithCaptionChild} />
      <img
        className={styles.newPostHouseWithCaptionItem}
        alt=""
        src="/rectangle-11@2x.png"
      />
      <div className={styles.newPostHouseWithCaptionInner} />
      <div className={styles.lineDiv} />
      <div className={styles.newPostHouseWithCaptionChild1} />
      <div className={styles.newPost}>New Post</div>
      <img className={styles.addIcon} alt="" src="/add@2x.png" />
      <div className={styles.rectangleDiv} />
      <div className={styles.iWishI}>I wish I could live here...</div>
      <div className={styles.newPostHouseWithCaptionChild2} />
      <div className={styles.description}>Description</div>
      <div className={styles.selectAudience}>Select Audience</div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} onClick={onRectangleClick} />
        <div className={styles.share}>Share</div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupItem} />
        <div className={styles.addPollLink}>Add poll, link or GIF</div>
        <img
          className={styles.expandArrowIcon}
          alt=""
          src="/expand-arrow@2x.png"
        />
      </div>
      <div className={styles.component1}>
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
    </div>
  );
};

export default NewPostHouseWithCaption;
