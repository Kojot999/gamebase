import styles from "./DescriptionTile.module.scss";
import { useState } from "react";
import clsx from "clsx";

export const DescriptionTile = ({ description }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div className={styles.wrapper}>
      <div
        className={clsx(styles.description, { [styles.isOpened]: isOpened })}
        onClick={() => setIsOpened(!isOpened)}
      >
        {description}
      </div>
    </div>
  );
};
