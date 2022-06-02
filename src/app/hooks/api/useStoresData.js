import { api } from "../../api/index";
import { useApi } from "../common/useApi";

export const useStoresData = () => {
  const { data, isLoading, isError, fetchData } = useApi({
    initialState: [],
    request: api.stores.getStoresData,
  });

  // tutaj wywolujemy hooka w hooku tak naprawdę
  // useApi to nasz hook rodzic, zrobiliśmy to bo okazało się że każde zapytanie do API
  // współdzieli tą samą dużą część logiki
  // hooki służą do wyekstrahowania współdzielonej logiki, aby móc ją wielokrotnie wykorzystywać
  // bez potrzeby ponownego przepisywania kodu (co jest antypatternem)

  //zwracamy dane do właściwego hooka
  return { data: data.results, isLoading, isError, fetchData };
};
