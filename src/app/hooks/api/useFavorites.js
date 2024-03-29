import { useState } from "react";

export const useFavorites = () => {
  const [favorite, setFavorite] = useState(() => {
    if (localStorage.getItem("favorite") ?? false) {
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
  };

  return [favorite, addFavoriteGame, setFavorite];
};
