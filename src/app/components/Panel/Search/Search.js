import styles from "./Search.module.scss";
import search from "../../../../Img/search.svg";
import { useState, useEffect } from "react";
import { useDebounce } from "../../../hooks/common/useDebounce";
import { useLocation } from "react-router-dom";

export const Search = ({ store }) => {
  const location = useLocation();
  const { fetchData: fetchGames } = store.games;
  const [inputValue, setInputValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const debouncedValue = useDebounce(inputValue, 500);

  const inputChange = (text) => {
    setInputValue(text.target.value);
  };

  useEffect(() => {
    if (isFocus) {
      fetchGames({ params: [{ key: "search", value: debouncedValue }] });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue, fetchGames]);

  useEffect(() => {
    setInputValue("");
  }, [location]);

  return (
    <div className={styles.wrapper}>
      <img alt="" src={search} />
      <input
        type="text"
        placeholder="Search..."
        onChange={inputChange}
        value={inputValue}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
    </div>
  );
};
