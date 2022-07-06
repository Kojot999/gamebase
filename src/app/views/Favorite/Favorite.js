import styles from "./Favoritie.module.scss";
import { HomeTile } from "../../components/Tiles/HomeTile/HomeTile";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../api";

export const Favorites = ({ store }) => {
  const { isLoading, error } = store;

  const [favGames, setFavGames] = useState(null);

  const isContentVisible = !isLoading && !error;

  const fetchFavorites = useCallback(async () => {
    const favData = JSON.parse(localStorage.getItem("favorite"));
    const fullResponse = await Promise.all(
      favData.map(async (id) => {
        return await api.games.getGameData({ id });
      })
    );
    setFavGames(fullResponse);
  }, []);

  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites]);

  return (
    <div className={styles.wrapper}>
      {isContentVisible && (
        <div className={styles.wrapperTiles}>
          {favGames &&
            favGames.map((game) => <HomeTile key={game.id} data={game} />)}
        </div>
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
