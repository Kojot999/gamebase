// const exampleParams = [
//   { key: "page", value: 2 },
//   { key: "genres", value: "RPG" },
// ];

<<<<<<< HEAD
// const API_BASE = "http://rawg.io/api";
// const API_KEY = "DBUJIHASGVDYUHUCZX";

// const queryBuilder = (path, params) => {
//   const query = params
//     .map((param, index) => {
//       return (index > 0 ? "&" : "?") + param.key + "=" + param.value;
//     })
//     .join("");

//   const result = API_BASE + path + query + "&key=" + API_KEY;
//   return result;
// };
=======
const API_BASE = "http://rawg.io/api";
const API_KEY = "DBUJIHASGVDYUHUCZX";

const queryBuilder = (path, params) => {
  const query = params
    .map((param, index) => {
      return (index > 0 ? "&" : "?") + param.key + "=" + param.value;
    })
    .join("");

  const result = API_BASE + path + query + "&key=" + API_KEY;
  return result;
};
>>>>>>> main

// const result = queryBuilder("/games", exampleParams);
// console.log(result);
