import styles from "./Game.module.scss";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useGameData } from "../../hooks/api/useGameData";
import { AddFavorite } from "../../components/AddFavorites/AddFavorites";
import metacriticIcon from "../../../Img/metacritic.svg";
import { PLATFORM_ICON_CONFIG } from "../../constants/platformIcon.config";
import { StoresTile } from "../../components/Tiles/GameTiles/StoresTile/StoresTile";
import { DescriptionTile } from "../../components/Tiles/GameTiles/DescriptionTile/DescriptionTile";
import { GameSeriesTile } from "../../components/Tiles/GameTiles/GameSeriesTile/GameSeriesTile";
import { ScreenShotsTile } from "../../components/Tiles/GameTiles/ScreenShootsTile/ScreenShotsTile";
import { useFavorites } from "../../hooks/api/useFavorites";
import ReactModal from "react-modal";
import { useGameScreenShots } from "../../hooks/api/useGameScreenShots";
import close from "../../../Img/close.svg";
import { useGameSeries } from "../../hooks/api/useGameSeries";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const GameView = () => {
  const { data: game, isLoading, error, fetchData: fetchGame } = useGameData();
  const isContentVisible = !isLoading && !error;
  const params = useParams();
  const {
    id,
    name,
    metacritic,
    parent_platforms: parentPlatforms,
    background_image: backgroundImage,
    genres,
    released,
    developers,
    stores,
    description_raw: description,
  } = game;

  const { data: screenShots, fetchData: fetchScreenShots } =
    useGameScreenShots();

  const { results } = screenShots;

  const { data: gameSeries, fetchData: fetchGameSeries } = useGameSeries();

  useEffect(() => {
    fetchGame({ id: params.id });
    fetchScreenShots({ id: params.id });
    fetchGameSeries({ id: params.id });
  }, [fetchGame, fetchScreenShots, fetchGameSeries, params.id]);

  const [favorite, addFavoriteGame] = useFavorites();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeFun = useEffect(() => {
    const handleRequestCloseFunc = (e) => {
      if (e.keyCode === 27) {
        setModalIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleRequestCloseFunc);
    return () => window.removeEventListener("keydown", handleRequestCloseFunc);
  }, [modalIsOpen]);

  ReactModal.setAppElement("#root");

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
            <div className={styles.favorites}>
              <AddFavorite
                favorite={favorite}
                setFavorite={addFavoriteGame}
                id={id}
              />
            </div>
            <div className={styles.rating}>
              <p>{metacritic}</p>
              <img alt="metacritic" src={metacriticIcon} />
            </div>
            <div className={styles.descriptionwrapper}>
              <h3 className={styles.title}>{name}</h3>
              <div className={styles.genres}>
                <ul>
                  {genres?.map((genres) => (
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
              <p className={styles.released}>Released: {released}</p>
              <div className={styles.developers}>
                <ul>
                  <p>Developers: </p>
                  {developers.map((developers) => (
                    <li key={developers.id}>{developers.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.secondaryTiles}>
            <DescriptionTile description={description} />
            <StoresTile stores={stores} />
          </div>
          <div className={styles.thirdTiles}>
            <ScreenShotsTile
              setModalIsOpen={setModalIsOpen}
              results={results}
            />
            <GameSeriesTile gameSeries={gameSeries} />
          </div>
          <div>
            <ReactModal
              onRequestClose={closeFun}
              isOpen={modalIsOpen}
              contentLabel="Modal as"
            >
              <div>
                <div className={styles.wrapperClose}>
                  <img
                    alt=""
                    scr={close}
                    onClick={() => setModalIsOpen(false)}
                  />
                </div>
                <Carousel>
                  {results?.map(({ image }) => (
                    <div key={id}>
                      <img alt="ScreenShot" src={image} />
                    </div>
                  ))}
                </Carousel>
              </div>
            </ReactModal>
          </div>
        </>
      )}
      {isLoading && (
        <div className={styles.loadingwrapper}>
          <p>Loading...</p>
        </div>
      )}
      {error && <div>Error: Unknown error</div>}
    </div>
  );
};
