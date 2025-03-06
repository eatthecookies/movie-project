import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchData<T>(request: string): Promise<T> {
  const url = import.meta.env.VITE_API_URL + request;
  const auth = import.meta.env.VITE_AUTH;

  const options = {
    headers: {
      accept: "application/json",
      Authorization: auth,
    },
    params: {
      language: "ru-RU",
    },
  };

  const { data } = await axios.get<T>(url, options);
  return data;
}

export function useFetchData<T>(request: string) {
  return useQuery<T>({
    queryKey: [request], 
    queryFn: () => fetchData<T>(request), 
  });
}
