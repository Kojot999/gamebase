import { RAWG_API, API_KEY } from "./source";

export const queryBuilder = (searchValue) => {
  const query = "&search=" + (searchValue || "");

  const result = RAWG_API + "/games" + API_KEY + query;

  return result;
};
