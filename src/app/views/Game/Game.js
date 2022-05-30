import styles from "./Game.module.scss";
import { TailSpin } from "react-loader-spinner";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useGameData } from "../../hooks/api/useGameData";
import AddFavoritie from "../../components/AddFavorites/AddFavorities";
import metacriticIcon from "../../../Img/metacritic.svg";
import { PLATFORM_ICON_CONFIG } from "../../constants/platformIcon.config";
import { StoresTile } from "../../components/Tiles/GameTiles/StoresTile/StoresTile";
import { DescriptionTile } from "../../components/Tiles/GameTiles/DescriptionTile/DescriptionTile";
import { ScreenShotsTile } from "../../components/Tiles/GameTiles/ScreenShootsTile/ScreenShotsTile";

export const GameView = () => {
  const { data: game, isLoading, error, fetchData: fetchGame } = useGameData();
  const isContentVisible = !isLoading && !error;
  const params = useParams();
  const {
    name,
    metacritic,
    parent_platforms: parentPlatforms,
    background_image: backgroundImage,
    genres,
    released,
    developers,
    stores,
    description_raw: description,
    background_image_additional: screenShots,
  } = game;

  useEffect(() => {
    fetchGame({ id: params.id });
  }, [fetchGame, params.id]);

  return (
    <div className={styles.wrapper}>
      {isContentVisible && (
        <>
          <div className={styles.tileMain}>
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
            <div className={styles.descriptionwrapper}>
              <h3 className={styles.title}>{name}</h3>
              <p className={styles.released}>Released: {released}</p>
              <div className={styles.developers}>
                <ul>
                  <p>Developers: </p>
                  {developers.map((developers) => (
                    <li key={developers.id}>
                      <p>{developers.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.genres}>
                <ul>
                  {genres.map((genres) => (
                    <li key={genres.id}>
                      <a href="/">#{genres.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.platform}>
                <ul>
                  {parentPlatforms.map(({ platform }) => (
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
          <div className={styles.secondaryTiles}>
            <DescriptionTile description={description} />
            <ScreenShotsTile screenShots={screenShots} />
            <StoresTile data={stores} />
          </div>
        </>
      )}
      {isLoading && (
        <div className={styles.loadingwrapper}>
          <TailSpin
            className={styles.loading}
            ariaLabel="loading-indicator"
            color="white"
          />
        </div>
      )}
      {error && <div>Error: Unknown error</div>}
    </div>
  );
};
