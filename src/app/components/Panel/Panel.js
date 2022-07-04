import styles from "./Panel.module.scss";
import { Search } from "./Search/Search";
import { Sort } from "./Sort/Sort";

export const Panel = ({ store }) => {
  return (
    <div className={styles.wrapper}>
      <Sort store={store} />
      <Search store={store} />
    </div>
  );
};
