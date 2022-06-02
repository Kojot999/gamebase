import styles from "./AddFavorities.moudle.scss";
import star from "../../../Img/star.svg";
import starFilled from "../../../Img/starFilled.svg";

export const AddFavoritie = ({ favorite, setFavorite, id }) => {
  return (
    <div className={styles.wrapper}>
      <img
        alt="star"
        src={favorite === [] ? starFilled : star}
        className={styles.starIcon}
        id="image"
        onClick={() => setFavorite(id)}
      />
    </div>
  );
};
