import styles from "./DescriptionTile.module.scss";

export const DescriptionTile = ({ description }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.stores}>
        <h2>Description:</h2>
        <div className={styles.wrapperItems}>{description}</div>
      </div>
    </div>
  );
};
