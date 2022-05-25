import { composeUrl } from "../utils";

const getStoresData = async (params) => {
  console.log({ params });
  return await (await fetch(composeUrl("/stores"))).json();
};

export const stores = {
  getStoresData,
};
