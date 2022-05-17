import { Tile } from "./Tile/Tile";
import styles from "./Content.module.scss";
import { useContent } from "./useContent";
import { Filterbar } from "../Filterbar/Filterbar";

export const Content = () => {
  const { data, isLoading, error } = useContent();
  const isContentVisible = !isLoading && !error;
  const { games } = data;

  return (
    <div className={styles.wrapper}>
      <Filterbar />
      {isContentVisible && (
        <>
          {games.map((props) => (
            <Tile key={props.id} {...props} />
          ))}
        </>
      )}
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: Unknown error</div>}
    </div>
  );
};
