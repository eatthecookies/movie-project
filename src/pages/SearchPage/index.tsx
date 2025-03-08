import { useEffect, useState } from "react";
import axios from "axios";
import SearchItem from "./SearchItem";
import styles from "./SearchPage.module.css";
import { useSearchParams } from "react-router";
import { SearchType } from "../../types/SearchTypes";

export default function SearchPage() {
  const url = import.meta.env.VITE_API_URL + "/search/multi";
  const auth = import.meta.env.VITE_AUTH;
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const [searchTerm, setSearchTerm] = useState<string>(query);
  const [data, setData] = useState<null | SearchType>(null);

  async function fetchData() {
    const { data } = await axios.get(url, options);
    setData(data);
  }

  useEffect(() => {
    if (query) {
      fetchData();
    }
  }, [query]);

  const options = {
    headers: {
      accept: "application/json",
      Authorization: auth,
    },
    params: {
      language: "ru-RU",
      query: searchTerm,
      include_adult: true,
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <input
          className={styles.searchBar}
          type="text"
          onChange={(event) => {
            if (searchTerm && searchTerm.length > 2) fetchData();
            else {
              setData(null);
            }
            setSearchTerm(event.target.value);
          }}
          value={searchTerm}
          placeholder="Введите название фильма или сериала"
        />
        <button className={styles.searchButton} onClick={fetchData}>
          Найти
        </button>
      </div>

      <div className={styles.searchItems}>
        {data &&
          data.results.map((item) => <SearchItem item={item}></SearchItem>)}
      </div>
    </div>
  );
}
