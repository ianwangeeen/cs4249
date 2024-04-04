import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NewPostDog.module.css";

const NewPostDog: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangle2Click = useCallback(() => {
    navigate("/new-post-dog-with-caption");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/end-screen");
  }, [navigate]);

  return (
    <div className={styles.newPostDog}>
      <div className={styles.newPostDogChild} />
      <div className={styles.newPostDogItem} />
      <div className={styles.newPostDogInner} />
      <div className={styles.lineDiv} />
      <img
        className={styles.photo202404031116413Icon}
        alt=""
        src="/photo-20240403-111641-2@2x.png"
      />
      <div className={styles.newPost}>New Post</div>
      <img className={styles.addIcon} alt="" src="/add@2x.png" />
      <div className={styles.rectangleDiv} onClick={onRectangle2Click} />
      <div className={styles.title}>Title</div>
      <div className={styles.newPostDogChild1} />
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

export default NewPostDog;
