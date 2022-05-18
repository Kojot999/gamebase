import { StoresTile } from "../../components/Tiles/StoresTile/StoresTile";
import styles from "./Stores.module.scss";
import { useContent } from "./useContent";

export const Stores = () => {
  const { data, isLoading, error } = useContent();
  const isContentVisible = !isLoading && !error;
  const { stores } = data;

  return (
    <>
      <div className={styles.wrapper}>
        {isContentVisible && (
          <>
            {stores.map((store) => (
              <StoresTile key={store.id} data={{ ...store }} />
            ))}
          </>
        )}

        {isLoading && <div>Loading...</div>}
        {error && <div>Error: Unknown error</div>}
      </div>
    </>
  );
};
