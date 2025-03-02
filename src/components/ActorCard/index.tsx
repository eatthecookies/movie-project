import { Link } from "react-router";
import { ActorResult } from "../../types/ActorTypes";
import styles from "./ActorCard.module.css";

export default function PosterCard({ actor }: { actor: ActorResult }) {
  const imageUrl = import.meta.env.VITE_API_IMAGE_URL;

  return (
    <Link to={`person/${actor.id}`}>
      <div className={styles.actorCard} key={actor.id}>
        <img
          className={styles.actorImg}
          src={imageUrl + "/w500" + actor.profile_path}
        ></img>
        <p className={styles.actorName}>{actor.name}</p>
      </div>
    </Link>
  );
}
