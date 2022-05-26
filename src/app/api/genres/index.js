import { queryBuilder } from "../queryBuilder";

const getGenresData = async () =>
  await (await fetch(queryBuilder("/genres"))).json();

export const genres = {
  getGenresData,
};
