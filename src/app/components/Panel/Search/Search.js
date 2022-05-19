import styles from "./Search.module.scss";
import search from "../../../../Img/search.svg";

export const Search = () => {
  return (
    <div className={styles.wrapper}>
      <img alt="" src={search} />
      <input placeholder="Search..." />
    </div>
  );
};
