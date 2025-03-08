import styles from "./SearchBar.module.css";
import { useState } from "react";
import axios from "axios";
import SearchItem from "./SearchItem";
import { useNavigate } from "react-router";

export default function SearchBar() {
  const url = import.meta.env.VITE_API_URL + "/search/multi";
  const auth = import.meta.env.VITE_AUTH;
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [data, setData] = useState<any[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
  }
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

  async function fetchData(query: string) {
    if (!query.trim()) return;
    try {
      const { data } = await axios.get(url, options);
      setData(data.results.slice(0, 6));
      setShowResults(true);
    } catch (error) {
      console.error("Ошибка при поиске:", error);
    }
  }

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.searchBar}
        type="text"
        onChange={(event) => {
          const value = event.target.value;
          setSearchTerm(value);
          if (value.length > 1) fetchData(value);
          else setData([]);
        }}
        value={searchTerm}
        placeholder="Введите название фильма или сериала"
        onFocus={() => setShowResults(data.length > 0)}
        onBlur={() => setTimeout(() => setShowResults(false), 100)}
      />
      <button className={styles.searchButton} onClick={handleSubmit}>
        Найти
      </button>

      {showResults && (
        <div className={styles.searchItems}>
          {data.map((item) => (
            <SearchItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
