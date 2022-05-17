import styles from "./Filters.module.scss";
import sort from "../../../../Img/sort.svg";

export const Filters = () => {
  return (
    <div className={styles.wrapper}>
      <img alt="^" src={sort} />
      <ul>Sort</ul>
    </div>
  );
};
