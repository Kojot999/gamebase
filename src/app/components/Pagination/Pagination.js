import { useState, useMemo } from "react";
import { usePagination } from "../../hooks/common/usePagination";
import styles from "./Pagination.module.scss";
import arrow from "../../../Img/double arrow.svg";

export const Pagination = ({ count, setPage }) => {
  const [pageCount, setPageCount] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginateButtons] = usePagination(pageCount);

  useMemo(() => {
    count && setPageCount(Math.ceil(count / 20));
  }, [count]);

  const paginationAction = (i) => {
    setCurrentPage(i === pageCount ? pageCount : i);
    setPage(i === pageCount ? pageCount : i);
  };

  console.log(currentPage);

  return (
    <div className={styles.wrapper}>
      <div
        onClick={() => {
          setPage(1);
          setCurrentPage(1);
        }}
      >
        <img alt="First" src={arrow} className={styles.arrowRight} />
      </div>
      <div>
        {paginateButtons(
          currentPage >= 3 ? currentPage - 3 : currentPage - 1,
          currentPage === 2 ? currentPage + 5 : currentPage + 3
        ).map((i) => (
          <button
            onClick={() => {
              count && paginationAction(i);
            }}
            style={{ background: currentPage !== i ? "" : "#23243b" }}
            key={i}
          >
            {i}
          </button>
        ))}
      </div>
      <div
        onClick={() => {
          setPage(pageCount);
          setCurrentPage(pageCount);
        }}
      >
        <img alt="Last" src={arrow} className={styles.arrowLeft} />
      </div>
    </div>
  );
};
