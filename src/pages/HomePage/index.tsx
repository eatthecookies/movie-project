import { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import { Response } from "../../types";
export default function HomePage() {
  const [data, setData] = useState<null | Response>(null);
  const url = import.meta.env.VITE_API_URL;
  const imageUrl = import.meta.env.VITE_API_IMAGE_URL;
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

  return (
    <div className={styles.hero}>
      <div className={styles.cardContainer}>
        {data &&
          data.results.map((val, index) => (
            <div key={index} className={styles.posterCard}>
              <img width="100%" src={imageUrl + val.poster_path}></img>
            </div>
          ))}
      </div>
    </div>
  );
}
