import { Link } from "react-router";
import styles from "./SearchItem.module.css";
import { Result } from "../../../types/SearchTypes";
export default function SearchItem({ item }: { item: Result }) {
  const url =
    import.meta.env.VITE_API_IMAGE_URL +
    "/w200" +
    (item.poster_path || item.profile_path);
  return (
    <Link to={"/" + item.media_type + "/" + item.id}>
      <div className={styles.itemContainer}>
        <img src={url} alt="" />
        <div>
          <p className={styles.title}>{item.title || item.name}</p>
          <p>{item.vote_average}</p>
        </div>
      </div>
    </Link>
  );
}
