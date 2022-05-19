import styles from "./Tile.module.scss";
import star from "../../../../Img/star.svg";
import metacriticIcon from "../../../../Img/metacritic.svg";
import { PARENT_PLATFORMS_CONFIG } from "../../../constants/platformsParents.config";

export const HomeTile = ({ data }) => {
  const {
    id,
    name,
    metacritic,
    background_image: backgroundImage,
    parent_platforms,
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
            {parent_platforms.map(({ platform }) => (
              <li>
                <img
                  alt={platform.name}
                  src={PARENT_PLATFORMS_CONFIG[platform.slug]}
                  className={styles.platformIcon}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
