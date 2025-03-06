import PosterCard from "../../../components/PosterCard";
import { useFetchData } from "../../../hooks/useFetchData";
import { MovieResult } from "../../../types/MovieTypes";
import CardCarousel from "../../HomePage/CardCarousel";

export default function FilmsSection({ actorId }: { actorId: number }) {
  const { data } = useFetchData<MovieResult>(
    "/person/" + actorId + "/movie_credits"
  );

  if (data)
    return (
      <div>
        <CardCarousel>
          {data.cast.map((item: MovieResult, index) => (
            <PosterCard key={index} movie={item}></PosterCard>
          ))}
        </CardCarousel>
      </div>
    );
}
