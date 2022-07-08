import styles from "./DescriptionTile.module.scss";

export const DescriptionTile = ({ description }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.description}>{description}</div>
    </div>
  );
};
