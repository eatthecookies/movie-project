import { useEffect, useState } from "react";

export function useFetchData<T>(request: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  
  const url = import.meta.env.VITE_API_URL + request + "?language=ru-RU";
  const auth = import.meta.env.VITE_AUTH;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: auth,
    },
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url, options);
        const jsonData: T = await res.json();
        setData(jsonData);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }); 

  return { data, loading };
}
