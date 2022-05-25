import styles from "./Search.module.scss";
import search from "../../../../Img/search.svg";
import { useState, useEffect } from "react";
import { useDebounce } from "../../../hooks/common/useDebounce";

export const Search = ({ store }) => {
  const { fetchData: fetchGames } = store.games;

  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 500);

  const inputChange = (text) => {
    setInputValue(text.target.value);
  };

  useEffect(() => {
    fetchGames({ search: debouncedValue });
  }, [debouncedValue, fetchGames]);

  return (
    <div className={styles.wrapper}>
      <img alt="" src={search} />
      <input
        type="text"
        placeholder="Search..."
        onChange={inputChange}
        value={inputValue}
      />
    </div>
  );
};
