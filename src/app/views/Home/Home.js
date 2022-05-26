import { HomeTile } from "../../components/Tiles/HomeTile/HomeTile";
import styles from "./Home.module.scss";
import { useEffect } from "react";

export const Home = ({ store }) => {
  const { data: games, isLoading, error, fetchData: fetchGames } = store.games;
  // tutaj wyciagamy dane i funkcje fetchData
  // ze stora, naszego glownego centrum danych w aplikacji

  const isContentVisible = !isLoading && !error;

  useEffect(() => {
    // tutaj zapytanie do api jest wywolywane
    // poprzez fetchGames mozna wykonac zapytanie jeszcze raz
    // na przyklad by odswiezyc dane, zmienic parametry lub kontrolowac
    // po prostu kiedy to zapytanie idzie

    fetchGames({ search: "" });
    // tutaj do fetchGames(->params<-) przekazesz sobie parametry
    // ktore nastepnie bedziesz mogl wykorzystac w queryBuilderze
    // do budowania searchQuery - tego bajera z search?
  }, [fetchGames]);

  return (
    <>
      <div className={styles.wrapper}>
        {isContentVisible && (
          <>
            {games.map((game) => (
              <HomeTile key={game.id} data={game} />
            ))}
          </>
        )}

        {isLoading && <div>Loading...</div>}
        {error && <div>Error: Unknown error</div>}
      </div>
    </>
  );
};
