import styles from "./AddFavorities.moudle.scss";
import star from "../../../Img/star.svg";
import starFilled from "../../../Img/starFilled.svg";

export const AddFavorite = ({ favorite, setFavorite, id }) => {
  return (
    <div className={styles.wrapper}>
      <img
        alt={
          favorite.includes(id) ? "remove from favorites" : "add to favorites"
        }
        src={favorite.includes(id) ? starFilled : star}
        className={styles.starIcon}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          setFavorite(id);
        }}
      />
    </div>
  );
};
