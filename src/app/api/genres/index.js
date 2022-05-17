import { composeUrl } from "../utils";

const getGenresData = async () =>
  await (await fetch(composeUrl("/genres"))).json();

export const genres = {
  getGenresData,
};
