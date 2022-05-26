import styles from "./Tile.module.scss";
import metacriticIcon from "../../../../Img/metacritic.svg";
import { PLATFORM_ICON_CONFIG } from "../../../constants/platformIcon.config";
import AddFavoritie from "../../AddFavorites/AddFavorities";

export const HomeTile = ({ data }) => {
  const {
    id,
    name,
    metacritic,
    background_image: backgroundImage,
    parent_platforms: parentPlatforms,
    genres,
  } = data;

  return (
    <div className={styles.wrapper}>
      <div key={id} className={styles.tile}>
        <div className={styles.wrapperImg}>
          <div className={styles.overlay}>
            <img
              alt="gameIMG"
              src={backgroundImage}
              className={styles.gameImg}
            />
          </div>
        </div>
        <div className={styles.favorities}>
          <AddFavoritie />
        </div>
        <div className={styles.rating}>
          <p>{metacritic}</p>
          <img alt="metacritic" src={metacriticIcon} />
        </div>
        <div className={styles.description}>
          <h3 className={styles.title}>{name}</h3>
          <div className={styles.genres}>
            <ul>
              {genres.slice(0, 3).map((genres) => (
                <li key={genres.id}>
                  <a href="/">#{genres.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.platform}>
            <ul>
              {parentPlatforms.slice(0, 5).map(({ platform }) => (
                <li key={platform.id}>
                  <img
                    alt={platform.name}
                    src={PLATFORM_ICON_CONFIG[platform.slug]}
                    className={styles.platformIcon}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
