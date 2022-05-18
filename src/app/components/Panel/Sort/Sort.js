import styles from "./Sort.module.scss";
import sort from "../../../../Img/sort.svg";
import { Collapse } from "react-collapse";
import { useState } from "react";
import clsx from "clsx";

export const Sort = () => {
  const [isOpened, setIsOpened] = useState(false);
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
            <li>Rating Lowest</li>
            <li>Rating Highest</li>
          </ul>
        </Collapse>
      </div>
    </div>
  );
};
