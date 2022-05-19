import styles from "./Panel.module.scss";
import { Search } from "./Search/Search";
import { Sort } from "./Sort/Sort";

export const Panel = () => {
  return (
    <div className={styles.wrapper}>
      <Sort />
      <Search />
    </div>
  );
};
