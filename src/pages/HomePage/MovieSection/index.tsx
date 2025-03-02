import { useFetchData } from "../../../hooks/useFetchData";
import CardCarousel from "../CardCarousel";
import PosterCard from "../../../components/PosterCard";

export default function MovieSection({ request }: { request: string }) {
  const { data, loading } = useFetchData(`/movie/${request}`);
  return (
    <div>
      <CardCarousel>
        {loading && "Данные скоро появятся"}
        {!loading &&
          data &&
          data.results.map((val) => <PosterCard key={val.id} movie={val} />)}
      </CardCarousel>
    </div>
  );
}
