import styles from "./Filterbar.module.scss";
import loop from "../../../Img/loop.svg";

export const Filterbar = () => {
  return (
    <div className={styles.wrapper}>
      <img alt="" src={loop} />
      <input></input>
    </div>
  );
};
