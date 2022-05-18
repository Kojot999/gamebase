import { useState, useEffect, useCallback } from "react";
import { api } from "../../api";

export const useContent = () => {
  const [data, setData] = useState({ stores: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const stores = (await api.stores.getStoresData()).results;
      setData({ stores });
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
