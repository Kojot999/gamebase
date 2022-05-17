import { Tile } from "./Tile/Tile";
import styles from "./Content.module.scss";
import { useContent } from "./useContent";

export const Content = () => {
  const { data, isLoading, error } = useContent();
  const isContentVisible = !isLoading && !error;
  const { games } = data;

  return (
    <>
      <div className={styles.wrapper}>
        {isContentVisible && (
          <>
            {games.map((game) => (
              <Tile key={game.id} data={game} />
            ))}
          </>
        )}
        {isLoading && <div>Loading...</div>}
        {error && <div>Error: Unknown error</div>}
      </div>
    </>
  );
};
