import { useParams } from "react-router";
import { useFetchData } from "../../hooks/useFetchData";
import { MovieResult } from "../../types/MovieTypes";
import styles from "./MoviePage.module.css";
import TrailerButton from "./TrailerButton";
import AboutSection from "./AboutSection";
import CreditsSection from "./CreditsSection";
import FilmsSection from "../PersonPage/FilmsSection";
import SimilarFilmsSection from "./SimilarFilmsSection";

export default function MoviePage() {
  const params = useParams();
  const imageUrl = import.meta.env.VITE_API_IMAGE_URL;
  const { data } = useFetchData<MovieResult>("/movie/" + params.id);

  if (data) {
    return (
      <div className={styles.movieContainer}>
        <div className={styles.heroSection}>
          <div>
            {data.poster_path ? (
              <img
                className={styles.poster}
                src={imageUrl + "/w500" + data.poster_path}
              />
            ) : (
              <img
                className={styles.poster}
                src="https://www.popcorn.app/assets/app/images/placeholder-movieimage.png"
              />
            )}

            <TrailerButton movieId={data.id}></TrailerButton>
          </div>
          <div>
            <h1 className={styles.title}>
              {data.title} ({data.release_date.slice(0, 4)})
            </h1>
            <p className={styles.primary}>
              {data.tagline || data.original_title}
            </p>
            <div className={styles.aboutSection}>
              <h2 className={styles.aboutTitle}>О фильме</h2>
              <AboutSection data={data} />
              <h2 className={styles.aboutTitle}>Описание</h2>
              <p className={styles.overview}>{data.overview}</p>
            </div>
          </div>
        </div>
        <CreditsSection movieId={data.id} />
        <SimilarFilmsSection movieId={data.id} />
      </div>
    );
  }
}
