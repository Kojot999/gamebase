import styles from "./Tile.module.scss";
import star from "../../../../Img/star.svg";
import metacriticIcon from "../../../../Img/metacritic.svg";

export const HomeTile = ({ data }) => {
  const {
    id,
    name,
    metacritic,
    background_image: backgroundImage,
    platforms,
    genres,
  } = data;

  return (
    <div className={styles.wrapper}>
      <div key={id} className={styles.tile}>
        <div className={styles.wrapperImg}>
          <h3 className={styles.title}>{name}</h3>
          <img alt="" src={backgroundImage} className={styles.gameImg} />
        </div>
        <img alt="star" src={star} className={styles.starIcon} />

        <div className={styles.description}>
          <div className={styles.genres}>
            <ul>
              {genres.map((genres) => (
                <li key={genres.id}>
                  <a href="/">#{genres.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.rating}>
            <img alt="metacritic" src={metacriticIcon} />
            <p>{metacritic}</p>
          </div>
        </div>
        <div className={styles.platform}>
          <ul>
            {platforms.map(({ platform }) => (
              <li>{platform.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
