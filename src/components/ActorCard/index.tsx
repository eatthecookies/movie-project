import { Link } from "react-router";
import styles from "./ActorCard.module.css";
import { ActorResult } from "../../types/ActorTypes";
import { Cast } from "../../types/MovieTypes";

export default function ActorCard({ actor }: { actor: ActorResult | Cast }) {
  const imageUrl = import.meta.env.VITE_API_IMAGE_URL;

  return (
    <Link to={`/person/${actor.id}`}>
      <div className={styles.actorCard} key={actor.id}>
        {actor.profile_path ? (
          <img
            className={styles.actorImg}
            src={imageUrl + "/w500" + actor.profile_path}
          ></img>
        ) : (
          <img
            className={styles.actorImg}
            src="https://icon-library.com/images/no-profile-pic-icon/no-profile-pic-icon-7.jpg"
            alt=""
          />
        )}
        <p className={styles.actorName}>{actor.name}</p>
      </div>
    </Link>
  );
}
