import { useParams } from "react-router";
import styles from "./PersonPage.module.css";
import { ActorResult } from "../../types/ActorTypes";
import { useFetchData } from "../../hooks/useFetchData";
import PersonMaterial from "./PersonMaterial";

export default function PersonPage() {
  const params = useParams();
  const imageUrl = import.meta.env.VITE_API_IMAGE_URL;
  const { data } = useFetchData<ActorResult>("/person/" + params.id);

  if (data) {
    return (
      <div className={styles.movieContainer}>
        <div className={styles.heroSection}>
          <div>
            <img
              className={styles.poster}
              src={imageUrl + "/w500" + data.profile_path}
            />
          </div>
          <div>
            <h1 className={styles.title}>{data.name}</h1>
            <p className={styles.primary}>{data.place_of_birth}</p>
            <div className={styles.aboutSection}>
              <h2 className={styles.aboutTitle}>Биография</h2>
              <p className={styles.overview}>{data.biography}</p>
            </div>
          </div>
        </div>
        <h2 className={styles.actorTitle}>Фильмы</h2>
        <PersonMaterial itemId={data.id} type="movie_credits" />
        <h2 className={styles.actorTitle}>Сериалы</h2>
        <PersonMaterial itemId={data.id} type="tv_credits" />
      </div>
    );
  }
}
