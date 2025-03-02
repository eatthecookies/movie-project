import { Link } from "react-router";
import { Result } from "../../types";
import styles from "./PosterCard.module.css";
export default function PosterCard({ movie }: { movie: Result }) {
  const imageUrl = import.meta.env.VITE_API_IMAGE_URL;

  return (
    <Link to={`movie/${movie.id}`}>
      <div key={movie.id}>
        <img
          className={styles.posterCard}
          src={imageUrl + "/w500" + movie.poster_path}
        ></img>
      </div>
    </Link>
  );
}
