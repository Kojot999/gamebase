import styles from "./Panel.module.scss";
import { Search } from "./Search/Search";
import { Filters } from "./Filtres/Filters";

export const Panel = () => {
  return (
    <div className={styles.wrapper}>
      <Filters />
      <Search />
    </div>
  );
};
