export const usePagination = (pageCount) => {
  const endRange = pageCount - 7;

  const paginateButtons = (start, end) => {
    const startPagination = [...Array(7 - 1 + 1).keys()].map((x) => x + 1);

    const arrayOfButtons = Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx);

    const endPagination = Array(pageCount - endRange)
      .fill()
      .map((_, idx) => pageCount - 6 + idx);

    return !start
      ? startPagination
      : start >= pageCount - 6
      ? endPagination
      : arrayOfButtons;
  };

  return [paginateButtons];
};
