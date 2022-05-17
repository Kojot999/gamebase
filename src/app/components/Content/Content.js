import { Tile } from "./Tile/Tile";
import styles from "./Content.module.scss";
import { useContent } from "./useContent";
import { Filterbar } from "../Filterbar/Filterbar";

export const Content = () => {
  const { data, isLoading, error } = useContent();
  const isContentVisible = !isLoading && !error;
  const { games } = data;
  const GAMES = [
    {
      name: "games",
      data: games,
    },
  ];
  return (
    <div className={styles.wrapper}>
      <Filterbar />
      {isContentVisible && (
        <>
          {GAMES.map((props) => (
            <Tile key={props.name} {...props} />
          ))}
        </>
      )}
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: Unknown error</div>}
    </div>
  );
};
