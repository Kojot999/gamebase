import { HomeTile } from "../../components/Tiles/HomeTile/HomeTile";
import styles from "./Home.module.scss";
import { useContent } from "./useContent";

export const Home = () => {
  const { data, isLoading, error } = useContent();
  const isContentVisible = !isLoading && !error;
  const { games } = data;

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
