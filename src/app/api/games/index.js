import { queryBuilder } from "../queryBuilder";

const getGamesData = async ({ params }) => {
  return await (await fetch(queryBuilder("/games", params))).json();
};

const getGameData = async ({ id }) => {
  return await (await fetch(queryBuilder(`/games/${id}`))).json();
};

export const games = {
  getGamesData,
  getGameData,
};
