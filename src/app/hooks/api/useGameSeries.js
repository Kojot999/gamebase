import { api } from "../../api/index";
import { useApi } from "../common/useApi";

export const useGameSeries = () => {
  const { data, fetchData } = useApi({
    initialState: [],
    request: api.games.getGameSeries,
  });

  return { data, fetchData };
};
