import { Link } from "react-router";
import styles from "./SearchItem.module.css";
import { Result } from "../../../types/SearchTypes";
export default function SearchItem({ item }: { item: Result }) {
  function truncate(str: string | undefined, maxlength: number) {
    return str && str.length > maxlength
      ? str.slice(0, maxlength - 1) + "…"
      : str;
  }
  const url =
    import.meta.env.VITE_API_IMAGE_URL +
    "/w200" +
    (item.poster_path || item.profile_path);
  return (
    <Link to={"/" + item.media_type + "/" + item.id}>
      <div className={styles.itemContainer}>
        <img src={url} className={styles.img} alt="" />
        <div>
          <p className={styles.title}>{item.title || item.name}</p>
          <p className={styles.overview}>{truncate(item.overview, 400)}</p>
        </div>
      </div>
    </Link>
  );
}
