import styles from "./Favoritie.module.scss";
import { HomeTile } from "../../components/Tiles/HomeTile/HomeTile";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../api";

export const Favorites = () => {
  const [favGames, setFavGames] = useState(null);

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
      <div className={styles.wrapperTiles}>
        {favGames &&
          favGames.map((game) => <HomeTile key={game.id} data={game} />)}
      </div>
    </div>
  );
};
