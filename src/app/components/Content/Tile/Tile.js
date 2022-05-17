import styles from "./Tile.module.scss";
import star from "../../../../Img/star.svg";

export const Tile = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      {data.results &&
        data.results.map(
          ({ name, id, background_image: backgroundImage, rating }) => (
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
          )
        )}
    </div>
  );
};
