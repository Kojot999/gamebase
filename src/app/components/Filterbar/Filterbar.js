import styles from "./Filterbar.module.scss";
import search from "../../../Img/search.svg";

export const Filterbar = () => {
  return (
    <div className={styles.wrapper}>
      <img alt="" src={search} />
      <input></input>
    </div>
  );
};
