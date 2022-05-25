import styles from "./Dropdown.module.scss";
import arrowDown from "../../../../Img/down-arrow.svg";
import { Collapse } from "react-collapse";
import { useState } from "react";
import clsx from "clsx";

export const Dropdown = ({ data, name }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={() => setIsOpened(!isOpened)}>
        <h2>{name}</h2>
        <div className={clsx(styles.arrow, { [styles.isOpened]: isOpened })}>
          <img alt="" src={arrowDown} />
        </div>
      </button>
      <Collapse isOpened={isOpened}>
        <ul>
          {data && data.results.map(({ name, id }) => <li key={id}>{name}</li>)}
        </ul>
      </Collapse>
    </div>
  );
};
