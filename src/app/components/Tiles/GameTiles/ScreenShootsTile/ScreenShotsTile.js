import styles from "./ScreenShotsTile.module.scss";

export const ScreenShotsTile = ({ screenShots }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.screenShots}>
        <img alt="screen shots" src={screenShots} />
      </div>
    </div>
  );
};
