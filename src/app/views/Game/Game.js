import styles from "./Game.module.scss";
import { TailSpin } from "react-loader-spinner";

export const GameView = ({ store }) => {
  const { data: games, isLoading, error } = store.games;
  const isContentVisible = !isLoading && !error;
  console.log(games);

  return (
    <div className={styles.wrapper}>
      {isContentVisible && (
        <>
          {/* {games.map((games) => (
            <div key={games.id}>
              <h2>a{games.name}</h2>
            </div>
          ))} */}
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
