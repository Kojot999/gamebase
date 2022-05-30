import styles from "./ScreenShotsTile.module.scss";

export const ScreenShotsTile = ({ screenShots }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.stores}>
        <h2>Screen Shots</h2>
        <div className={styles.wrapperItems}>
          <img alt="screen shots" src={screenShots} />
        </div>
      </div>
    </div>
  );
};
