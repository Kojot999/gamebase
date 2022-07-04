import styles from "./ScreenShotsTile.module.scss";

export const ScreenShotsTile = ({ additionalImg, setModalIsOpen }) => {
  return (
    <div className={styles.wrapper} onClick={() => setModalIsOpen(true)}>
      <h2>Screen Shots</h2>
      <div className={styles.screenShots}>
        <img alt="screen shots" src={additionalImg} />
      </div>
    </div>
  );
};
