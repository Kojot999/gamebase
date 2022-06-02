import { api } from "../../api/index";
import { useApi } from "../common/useApi";

export const useGameData = () => {
  const { data, isLoading, isError, fetchData } = useApi({
    initialState: [],
    request: api.games.getGameData,
  });

  return { data, isLoading, isError, fetchData };
};
