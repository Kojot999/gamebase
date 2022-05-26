import { api } from "../../api/index";
import { useApi } from "../common/useApi";

export const useGamesData = () => {
  const { data, isLoading, isError, fetchData } = useApi({
    initialState: [],
    request: api.games.getGamesData,
  });

  return { data, isLoading, isError, fetchData };
};
