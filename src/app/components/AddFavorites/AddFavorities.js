import styles from "./AddFavorities.moudle.scss";
import star from "../../../Img/star.svg";

const AddFavoritie = () => {
  return (
    <div className={styles.wrapper}>
      <img alt="star" src={star} className={styles.starIcon} />
    </div>
  );
};

export default AddFavoritie;
