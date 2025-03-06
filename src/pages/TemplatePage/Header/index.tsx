import { Link } from "react-router";
import styles from "./Header.module.css";
import SearchBar from "../../../components/SearchBar";
type Menu = {
  [key: string]: string;
};
export default function Header() {
  const menu: Menu = {
    Фильмы: "/movies",
    Сериалы: "/serials",
    Актеры: "/persons",
    КиноФортуна: "/fortune",
    Тренды: "/popular",
  };
  return (
    <div className={styles.headerContainer}>
      <Link to="/">
        <div className={styles.logo}>КиноХаос</div>
      </Link>

      <SearchBar />
      <div className={styles.links}>
        {Object.keys(menu).map((item) => (
          <Link to={menu[item]} key={item} className={styles.link}>
            {item}
          </Link>
        ))}
      </div>
      <button>Темная тема</button>
    </div>
  );
}
