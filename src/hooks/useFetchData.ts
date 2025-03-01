import { useEffect, useState } from "react";
import { Response } from "../types";

export function useFetchData(request:string){
    const [data, setData] = useState<null | Response>(null);
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
        const res = await fetch(url, options);
        const data: Response = await res.json();
        setData(data);
      }
      fetchData();
    }, []);
  return data
}