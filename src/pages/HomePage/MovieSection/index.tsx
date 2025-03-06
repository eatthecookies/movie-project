import { useFetchData } from "../../../hooks/useFetchData";
import CardCarousel from "../CardCarousel";
import PosterCard from "../../../components/PosterCard";
import { MovieResponse } from "../../../types/MovieTypes";

export default function MovieSection({ request }: { request: string }) {
  const { data } = useFetchData<MovieResponse>(`/movie/${request}`);
  return (
    <div>
      <CardCarousel>
        {!data
          ? "Данные скоро появятся"
          : data.results.map((val) => <PosterCard key={val.id} movie={val} />)}
      </CardCarousel>
    </div>
  );
}
