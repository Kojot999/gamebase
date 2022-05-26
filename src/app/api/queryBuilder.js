import { RAWG_API, API_KEY } from "./source";

// export const queryBuilder = (searchValue) => {
//   if (searchValue.type === "Genres"){
//   const query = "&genres=" + (searchValue.value);
//   return RAWG_API + "/games" + API_KEY + query;
//   } else  if(searchValue.type==="Platforms"){
//     const query = "&platforms=" + (searchValue.value);
//     return RAWG_API + "/games" + API_KEY + query;
//   } else{}
//  };

// const exampleParams = [
//   { key: "page", value: 2 },
//   { key: "genres", value: "RPG" },
// ];

export const queryBuilder = (path, params = []) => {
  const query = params.map((param, index) => {
    return "&" + param.key + "=" + param.value;
  });

  const result = RAWG_API + path + "?key=" + API_KEY + query;
  return result;
};
