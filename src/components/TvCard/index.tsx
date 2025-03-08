import { Link } from "react-router";
import styles from "./PosterCard.module.css";
import { Cast } from "../../types/TvTypes";
export default function TvCard({ movie }: { movie: Cast }) {
  const imageUrl = import.meta.env.VITE_API_IMAGE_URL;

  return (
    <Link to={`/movie/${movie.id}`}>
      <div className={styles.card} key={movie.id}>
        {movie.poster_path ? (
          <img
            className={styles.posterCard}
            src={imageUrl + "/w500" + movie.poster_path}
          ></img>
        ) : (
          <img
            src="https://www.popcorn.app/assets/app/images/placeholder-movieimage.png"
            className={styles.posterCard}
          />
        )}
        <div className={styles.overlay}>
          <p className={styles.movieTitle}>{movie.title}</p>
        </div>
      </div>
    </Link>
  );
}
