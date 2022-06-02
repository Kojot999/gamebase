import styles from "./Tile.module.scss";
import metacriticIcon from "../../../../Img/metacritic.svg";
import { PLATFORM_ICON_CONFIG } from "../../../constants/platformIcon.config";
import AddFavoritie from "../../AddFavorites/AddFavorities";
import { Link } from "react-router-dom";

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
    <Link key={id} className={styles.link} to={`/game/${id}`}>
      <div className={styles.tile}>
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
                  <p>#{genres.name}</p>
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
    </Link>
  );
};
