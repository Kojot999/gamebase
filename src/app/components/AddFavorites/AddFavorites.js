import styles from "./AddFavorities.moudle.scss";
import star from "../../../Img/star.svg";
import starFilled from "../../../Img/starFilled.svg";

export const AddFavorite = ({ favorite, setFavorite, id }) => {
  return (
    <div className={styles.wrapper}>
      <img
        alt="star"
        src={favorite.includes(id) ? starFilled : star}
        className={styles.starIcon}
        id="image"
        onClick={(e) => {
          e.stopPropagation();
          setFavorite(id);
        }}
      />
    </div>
  );
};
