import { queryBuilder } from "../queryBuilder";

const getPlatformsData = async () =>
  await (await fetch(queryBuilder("/platforms/lists/parents"))).json();

export const platforms = {
  getPlatformsData,
};
