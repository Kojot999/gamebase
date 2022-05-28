import { queryBuilder } from "../queryBuilder";

const getGamesData = async ({ params }) => {
  return await (await fetch(queryBuilder("/games", params))).json();
};

export const games = {
  getGamesData,
};
