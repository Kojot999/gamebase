import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Pagination.module.scss";
import arrow from "../../../Img/double arrow.svg";

export const Pagination = ({ count, setPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(count / 20); i++) {
    pageNumbers.push(i);
  }

  const [pageNumber, setPageNumber] = useState(0);

  const paginationItems = () => {
    if (pageNumber === pageNumbers) {
      return [];
    } else {
      return pageNumbers.slice(
        pageNumber === 0 ? pageNumber : pageNumber - 1,
        pageNumber >= 10000 ? pageNumber + 5 : pageNumber + 10
      );
    }
  };

  console.log({ pageNumber });

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li
          onClick={() => {
            setPage(1);
            setPageNumber(0);
          }}
        >
          <img alt="First" src={arrow} className={styles.arrowRight} />
        </li>
        {paginationItems().map((number) => (
          <li key={number}>
            <NavLink
              className={(item) => (item.isActive ? styles.selected : "")}
              onClick={() => {
                setPage(number);
                setPageNumber(number - 1);
              }}
              to=""
            >
              {number}
            </NavLink>
          </li>
        ))}

        <li
          onClick={() => {
            setPage(pageNumbers.length);
            setPageNumber(pageNumbers.length);
          }}
        >
          <img alt="Last" src={arrow} className={styles.arrowLeft} />
        </li>
      </ul>
    </div>
  );
};
