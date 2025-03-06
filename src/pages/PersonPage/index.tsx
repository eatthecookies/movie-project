import { useParams } from "react-router";
import styles from "./PersonPage.module.css";
import { ActorResult } from "../../types/ActorTypes";
import { useFetchData } from "../../hooks/useFetchData";
import FilmsSection from "./FilmsSection";
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
            {/* <TrailerButton movieId={data.id}></TrailerButton> */}
          </div>
          <div>
            <h1 className={styles.title}>{data.name}</h1>
            <p className={styles.primary}>
              {data.place_of_birth || data.original_title}
            </p>
            <div className={styles.aboutSection}>
              <h2 className={styles.aboutTitle}>О фильме</h2>
              {/* <AboutSection data={data} /> */}
              <h2 className={styles.aboutTitle}>Описание</h2>
              <p className={styles.overview}>{data.biography}</p>
            </div>
          </div>
        </div>
        <h2 className={styles.actorTitle}>Фильмы</h2>
        <FilmsSection actorId={data.id} />
      </div>
    );
  }
}
