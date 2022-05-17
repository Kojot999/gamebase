import styles from "./Search.module.scss";
import search from "../../../../Img/star.svg";

export const Search = () => {
  return (
    <div className={styles.wrapper}>
      <img alt="" src={search} />
      <input></input>
    </div>
  );
};
