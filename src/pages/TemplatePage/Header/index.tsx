import { Link } from "react-router";
import styles from "./Header.module.css";
import SearchBar from "../../../components/SearchBar";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <Link to="/">
        <div className={styles.logo}>КиноХаос</div>
      </Link>

      <SearchBar />
      <div className={styles.links}></div>
    </div>
  );
}
