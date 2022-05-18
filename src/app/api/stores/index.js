import { composeUrl } from "../utils";

const getStoresData = async () =>
  await (await fetch(composeUrl("/stores"))).json();

export const stores = {
  getStoresData,
};
