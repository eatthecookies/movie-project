import styles from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <div className={styles.searchContainer}>
      <input className={styles.searchBar} type="text" />
      <button className={styles.searchButton}>Найти</button>
    </div>
  );
}
