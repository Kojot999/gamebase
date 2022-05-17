import styles from "./Tile.module.scss";
import star from "../../../../Img/star.svg";

export const Tile = ({ data }) => {
  const { id, name, rating, background_image: backgroundImage } = data;
  return (
    <div className={styles.wrapper}>
      <div key={id} className={styles.tile}>
        <img alt="" src={backgroundImage} className={styles.gameImg} />
        <div className={styles.header}>
          <h3>{name}</h3>
          <div className={styles.rating}>
            <img alt="star" src={star} />
            <p>{rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
