import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ClickPlusBtn.module.css";

const ClickPlusBtn: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/main");
  }, [navigate]);

  return (
    <div className={styles.clickPlusBtn}>
      <div className={styles.clickPlusBtnChild} />
      <div className={styles.clickPlusBtnItem} />
      <img className={styles.locationIcon} alt="" src="/location@2x.png" />
      <div className={styles.nus}>NUS</div>
      <img className={styles.searchIcon} alt="" src="/search@2x.png" />
      <img className={styles.chatBubbleIcon} alt="" src="/chat-bubble@2x.png" />
      <div className={styles.clickPlusBtnInner} />
      <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
      <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
      <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
      <div className={styles.lineDiv} />
      <div className={styles.clickPlusBtnChild1} />
      <div className={styles.ellipseParent}>
        <div className={styles.groupChild} />
        <div className={styles.div}>+</div>
      </div>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <div className={styles.rectangleDiv} />
      <div className={styles.popup}>
        <div className={styles.slidable}>
          <div className={styles.popup1}>
            <div className={styles.rectangleParent}>
              <div className={styles.groupItem} />
              <div className={styles.groupInner} />
              <div className={styles.takePhotosOr}>Take Photos or Video</div>
              <div
                className={styles.rectangleGroup}
                onClick={onGroupContainerClick}
              >
                <div className={styles.groupChild1} />
                <div className={styles.addMediaFrom}>
                  Add media from gallery
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClickPlusBtn;
