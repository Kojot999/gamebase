import { HomeTile } from "../../components/Tiles/HomeTile/HomeTile";
import styles from "./Home.module.scss";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Home = ({ store }) => {
  const { data: games, isLoading, error, fetchData: fetchGames } = store.games;
  // tutaj wyciagamy dane i funkcje fetchData
  // ze stora, naszego glownego centrum danych w aplikacji
  const location = useLocation();
  const isContentVisible = !isLoading && !error;

  useEffect(() => {
    // tutaj zapytanie do api jest wywolywane
    // poprzez fetchGames mozna wykonac zapytanie jeszcze raz
    // na przyklad by odswiezyc dane, zmienic parametry lub kontrolowac
    // po prostu kiedy to zapytanie idzie

    fetchGames({ params: [{ key: "search", value: "" }] });
    // tutaj do fetchGames(->params<-) przekazesz sobie parametry
    // ktore nastepnie bedziesz mogl wykorzystac w queryBuilderze
    // do budowania searchQuery - tego bajera z search?
  }, [fetchGames, location]);

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
