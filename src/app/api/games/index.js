import { queryBuilder } from "../api";

const getGamesData = async ({ search }) => {
  // to pojdzie do queryBuildera
  return await (await fetch(queryBuilder(search))).json();
};

export const games = {
  getGamesData,
};
