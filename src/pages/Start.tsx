import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Start.module.css";

const Start: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/click-plus-btn");
  }, [navigate]);

  return (
    <div className={styles.start}>
      <div className={styles.startChild} />
      <div className={styles.startItem} />
      <img className={styles.locationIcon} alt="" src="/location@2x.png" />
      <div className={styles.nus}>NUS</div>
      <img className={styles.searchIcon} alt="" src="/search@2x.png" />
      <img className={styles.chatBubbleIcon} alt="" src="/chat-bubble@2x.png" />
      <div className={styles.startInner} />
      <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
      <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
      <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
      <div className={styles.lineDiv} />
      <div className={styles.startChild1} />
      <div className={styles.ellipseParent} onClick={onGroupContainerClick}>
        <div className={styles.groupChild} />
        <div className={styles.div}>+</div>
      </div>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
    </div>
  );
};

export default Start;
