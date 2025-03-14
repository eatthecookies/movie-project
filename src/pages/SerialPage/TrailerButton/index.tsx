import { useFetchData } from "../../../hooks/useFetchData";
import { MovieResponse } from "../../../types/MovieTypes";
import styles from "./TrailerButton.module.css";
export default function TrailerButton({ movieId }: { movieId: number }) {
  const { data } = useFetchData<MovieResponse>(`/movie/${movieId}/videos`);
  if (data && data.results.length != 0) {
    const url = `https://www.youtube.com/watch?v=${data.results[0].key}`;
    return (
      <a className={styles.trailerButton} href={url}>
        Посмотреть трейлер
      </a>
    );
  }
}
