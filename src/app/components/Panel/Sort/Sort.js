import styles from "./Sort.module.scss";
import sort from "../../../../Img/sort.svg";
import { Collapse } from "react-collapse";
import { useState } from "react";
import clsx from "clsx";
import { SORT_CONFIG } from "../../../constants/sort.config";

export const Sort = ({ store }) => {
  const [isOpened, setIsOpened] = useState(false);
  const { fetchData: fetchGames } = store.games;

  const handleClick = (order) => {
    fetchGames({ params: [{ key: "ordering", value: order }] });
  };

  return (
    <div className={styles.wrapper}>
      <button
        className={clsx(styles.button, { [styles.isOpened]: isOpened })}
        onClick={() => setIsOpened(!isOpened)}
      >
        <img alt="sort" src={sort} />
        <h3>Sort By</h3>
      </button>

      <div className={clsx(styles.dropdown, { [styles.isOpened]: isOpened })}>
        <Collapse isOpened={isOpened}>
          <ul>
            {SORT_CONFIG.map(({ sort, text }) => (
              <li key={text} onClick={() => handleClick(sort)}>
                {text}
              </li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
};
