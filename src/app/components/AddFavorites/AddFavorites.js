import styles from "./AddFavorities.moudle.scss";
import star from "../../../Img/star.svg";
import starFilled from "../../../Img/starFilled.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AddFavorite = ({ favorite, setFavorite, id }) => {
  const notify = () =>
    toast(
      favorite.includes(id) ? "Deleted from Favorites" : "Added to Favorites"
    );

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
          notify();
        }}
      />
      <ToastContainer />
    </div>
  );
};
