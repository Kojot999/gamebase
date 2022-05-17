import { useState, useEffect, useCallback } from "react";
import { api } from "../../api";

export const useSidebar = () => {
  const [data, setData] = useState({ genres: null, platforms: null });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const platforms = await api.platforms.getPlatformsData();
      const genres = await api.genres.getGenresData();
      setData({ genres, platforms });
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
