import { useState } from "react";

export const useFavorites = (setItems) => {
  const [favorite, setFavorite] = useState(() => {
    if (
      localStorage.getItem("favorite") !== null &&
      localStorage.getItem("favorite") !== "undefined"
    ) {
      let data = JSON.parse(localStorage.getItem("favorite"));
      return data;
    } else {
      return [];
    }
  });
  const addFavoriteGame = (id) => {
    const handleChange = (arr = [], id) =>
      arr.includes(id) ? arr.filter((_id) => id !== _id) : [...arr, id];

    const newArray = handleChange(favorite, id);

    localStorage.setItem("favorite", JSON.stringify(newArray));

    setFavorite(newArray);
    setItems((prevState) => [...prevState]);
  };

  return [favorite, addFavoriteGame, setFavorite];
};
