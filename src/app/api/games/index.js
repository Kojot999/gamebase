import { queryBuilder } from "../queryBuilder";

const getGamesData = async ({ params }) => {
  return await (await fetch(queryBuilder("/games", params))).json();
};

const getGameData = async ({ id }) => {
  return await (await fetch(queryBuilder(`/games/${id}`))).json();
};

const getGameScreenShots = async ({ id }) => {
  return await (await fetch(queryBuilder(`/games/${id}/screenshots`))).json();
};

const getGameSeries = async ({ id }) => {
  return await (await fetch(queryBuilder(`/games/${id}/game-series`))).json();
};

export const games = {
  getGamesData,
  getGameData,
  getGameScreenShots,
  getGameSeries,
};
