import { queryBuilder } from "../queryBuilder";

const getStoresData = async () => {
  return await (await fetch(queryBuilder("/stores"))).json();
};

export const stores = {
  getStoresData,
};
