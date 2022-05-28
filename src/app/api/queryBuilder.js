import { RAWG_API, API_KEY } from "./source";

export const queryBuilder = (path, params = []) => {
  const query = params.map((param, index) => {
    return "&" + param.key + "=" + param.value;
  });

  const result = RAWG_API + path + "?key=" + API_KEY + query;
  return result;
};
