import { queryBuilder } from "../QuerryBuilder";

const getGamesData = async ({ search }) => {
  return await (await fetch(queryBuilder(search))).json();
};

export const games = {
  getGamesData,
};
