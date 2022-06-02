import { StoresTile } from "../../components/Tiles/StoresTile/StoresTile";
import styles from "./Stores.module.scss";
import { useEffect } from "react";

export const Stores = ({ store }) => {
  const {
    data: stores,
    isLoading,
    error,
    fetchData: fetchStores,
  } = store.stores;
  // tutaj wyciagamy dane i funkcje fetchData
  // ze stora, naszego glownego centrum danych w aplikacji

  const isContentVisible = !isLoading && !error;

  useEffect(() => {
    // tutaj zapytanie do api jest wywolywane
    // poprzez fetchStores mozna wykonac zapytanie jeszcze raz
    // na przyklad by odswiezyc dane, zmienic parametry lub kontrolowac
    // po prostu kiedy to zapytanie idzie

    fetchStores();

    // tutaj do fetchStores(->params<-) przekazesz sobie parametry
    // ktore nastepnie bedziesz mogl wykorzystac w queryBuilderze
    // do budowania searchQuery - tego bajera z search?
  }, [fetchStores]);

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

        {isLoading && (
          <div className={styles.loadingwrapper}>
            <p>Loading...</p>
          </div>
        )}
        {error && <div>Error: Unknown error</div>}
      </div>
    </>
  );
};
