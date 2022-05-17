import { composeUrl } from "../utils";

const getGamesData = async () =>
  await (await fetch(composeUrl("/games"))).json();

export const games = {
  getGamesData,
};
