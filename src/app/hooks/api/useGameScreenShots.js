import { api } from "../../api/index";
import { useApi } from "../common/useApi";

export const useGameScreenShots = () => {
  const { data, fetchData } = useApi({
    initialState: [],
    request: api.games.getGameScreenShots,
  });

  return { data, fetchData };
};
