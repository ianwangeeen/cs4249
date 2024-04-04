import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Main.module.css";

const Main: FunctionComponent = () => {
  const navigate = useNavigate();

  const onPhoto202404031116412ImageClick = useCallback(() => {
    navigate("/new-post-dog");
  }, [navigate]);

  const onCancelTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRectangleImageClick = useCallback(() => {
    navigate("/new-post-burger");
  }, [navigate]);

  const onRectangleImage1Click = useCallback(() => {
    navigate("/new-post-house");
  }, [navigate]);

  return (
    <div className={styles.main}>
      <div className={styles.mainChild} />
      <div className={styles.mainItem} />
      <img className={styles.locationIcon} alt="" src="/location@2x.png" />
      <div className={styles.nus}>NUS</div>
      <img className={styles.searchIcon} alt="" src="/search@2x.png" />
      <img className={styles.chatBubbleIcon} alt="" src="/chat-bubble@2x.png" />
      <div className={styles.mainInner} />
      <div className={styles.lineDiv} />
      <div className={styles.mainChild1} />
      <div className={styles.ellipseParent}>
        <div className={styles.groupChild} />
        <div className={styles.div}>+</div>
      </div>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <img
        className={styles.photo202404031116411Icon}
        alt=""
        src="/photo-20240403-111641-1@2x.png"
      />
      <img
        className={styles.photo202404031116412Icon}
        alt=""
        src="/photo-20240403-111641-2@2x.png"
        onClick={onPhoto202404031116412ImageClick}
      />
      <div className={styles.cancel} onClick={onCancelTextClick}>
        Cancel
      </div>
      <img
        className={styles.rectangleIcon}
        alt=""
        src="/rectangle-10@2x.png"
        onClick={onRectangleImageClick}
      />
      <img
        className={styles.mainChild2}
        alt=""
        src="/rectangle-11@2x.png"
        onClick={onRectangleImage1Click}
      />
    </div>
  );
};

export default Main;
