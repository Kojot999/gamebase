import { API_KEY } from "../source";
import { RAWG_API } from "../source";

export const composeUrl = (path) => {
  return RAWG_API + path + API_KEY;
};
