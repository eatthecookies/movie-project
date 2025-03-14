import ActorCard from "../../../components/ActorCard";
import { useFetchData } from "../../../hooks/useFetchData";
import { ActorResponse } from "../../../types/ActorTypes";
import CardCarousel from "../CardCarousel";

export default function ActorSection() {
  const { data } = useFetchData<ActorResponse>("/person/popular");
  return (
    <div>
      <CardCarousel>
        {data &&
          data.results.map((actor) => <ActorCard actor={actor}></ActorCard>)}
      </CardCarousel>
    </div>
  );
}
