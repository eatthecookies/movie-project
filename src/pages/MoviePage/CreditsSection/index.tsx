import ActorCard from "../../../components/ActorCard";
import { useFetchData } from "../../../hooks/useFetchData";
import { ActorResponse } from "../../../types/ActorTypes";
import { Cast } from "../../../types/MovieTypes";
import CardCarousel from "../../HomePage/CardCarousel";
import styles from "../MoviePage.module.css";
export default function CreditsSection({ movieId }: { movieId: number }) {
  const { data } = useFetchData<ActorResponse>(
    "/movie/" + movieId + "/credits"
  );

  if (data && data.cast.length)
    return (
      <div>
        <h2 className={styles.actorTitle}>Актеры</h2>
        <CardCarousel>
          {data.cast.map((item: Cast, index) => (
            <ActorCard key={index} actor={item}></ActorCard>
          ))}
        </CardCarousel>
      </div>
    );
}
