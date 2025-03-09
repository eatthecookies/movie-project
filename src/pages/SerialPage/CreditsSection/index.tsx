import ActorCard from "../../../components/ActorCard";
import { useFetchData } from "../../../hooks/useFetchData";
import { ActorResult } from "../../../types/ActorTypes";
import CardCarousel from "../../HomePage/CardCarousel";
import styles from "../MoviePage.module.css";
export default function CreditsSection({ movieId }: { movieId: number }) {
  const { data } = useFetchData<ActorResult>("/movie/" + movieId + "/credits");

  if (data && data.cast.length)
    return (
      <div>
        <h2 className={styles.actorTitle}>Актеры</h2>
        <CardCarousel>
          {data.cast.map((item, index) => (
            <ActorCard key={index} actor={item}></ActorCard>
          ))}
        </CardCarousel>
      </div>
    );
}
