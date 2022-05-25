import { useState, useCallback } from "react";

export const useApi = ({ initialState, request }) => {
  // hook ten jako parametry przyjmuje inicjalny stan
  // oraz referencje do funkcji z wlasciwym zapytaniem do api

  const [data, setData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  const fetchData = useCallback(
    // dzięki zastosowaniu useCallbacka w tym miejscu
    // nasze zapytanie zostanie "zapamiętane" przez Reacta
    // dzięki czemu nie będzie wykonywane przy każdej zmianie Route'a
    // lecz tylko i wyłącznie wtedy jeśli sami konkretnie to wywołamy
    // przy użyciu fetchData

    async (params) => {
      //tutaj są paramsy które przekazujemy do fetchData(params)
      // w roznych miejscach aplikacji

      try {
        const data = (await request(params)).results;
        // tutaj paramsy przekazywane są dalej do właściwego zapytania api
        // i query buildera

        setData(data);
      } catch (error) {
        console.log(error);
        setIsError(error);
      } finally {
        setIsLoading(false);
      }
    },
    [request]
  );

  return { data, isLoading, isError, fetchData };
};
