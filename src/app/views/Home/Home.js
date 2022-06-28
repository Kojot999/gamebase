import { HomeTile } from "../../components/Tiles/HomeTile/HomeTile";
import styles from "./Home.module.scss";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Panel } from "../../components/Panel/Panel";
import { Pagination } from "../../components/Pagination/Pagination";

export const Home = ({ store }) => {
  const {
    data: games,
    isLoading,
    error,
    fetchData: fetchGames,
    count,
  } = store.games;
  // tutaj wyciagamy dane i funkcje fetchData
  // ze stora, naszego glownego centrum danych w aplikacji
  const location = useLocation();
  const isContentVisible = !isLoading && !error;
  const [page, setPage] = useState(1);

  useEffect(() => {
    // tutaj zapytanie do api jest wywolywane
    // poprzez fetchGames mozna wykonac zapytanie jeszcze raz
    // na przyklad by odswiezyc dane, zmienic parametry lub kontrolowac
    // po prostu kiedy to zapytanie idzie

    fetchGames({ params: [{ key: "page", value: page }] });
    // tutaj do fetchGames(->params<-) przekazesz sobie parametry
    // ktore nastepnie bedziesz mogl wykorzystac w queryBuilderze
    // do budowania searchQuery - tego bajera z search?
  }, [fetchGames, location, page]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperPanel}>
        <Panel store={store} />
      </div>
      <div className={styles.wrapperTiles}>
        {isContentVisible && (
          <>
            {games.map((game) => (
              <HomeTile key={game.id} data={game} />
            ))}
          </>
        )}

        {isLoading && (
          <div className={styles.loadingwrapper}>
            <p>Loading...</p>
          </div>
        )}
        {error && <div>Error: Unknown error</div>}
      </div>
      <div className={styles.wrapperPages}>
        <Pagination count={count} setPage={setPage} />
      </div>
    </div>
  );
};
