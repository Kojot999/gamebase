import { useState, useEffect, useCallback } from "react";
import { api } from "../../api";

export const useContent = () => {
  const [data, setData] = useState({ games: null });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const games = await api.games.getGamesData();
      console.log(games);
      setData({ games });
    } catch (error) {
      console.log(error);
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, isError };
};
