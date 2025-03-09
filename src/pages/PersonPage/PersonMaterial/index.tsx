import PosterCard from "../../../components/PosterCard";
import TvCard from "../../../components/TvCard";
import { useFetchData } from "../../../hooks/useFetchData";
import { MovieResult } from "../../../types/MovieTypes";
import CardCarousel from "../../HomePage/CardCarousel";

export default function PersonMaterial({
  itemId,
  type,
}: {
  itemId: number;
  type: string;
}) {
  const { data } = useFetchData<MovieResult>("/person/" + itemId + "/" + type);

  if (data)
    return (
      <div>
        <CardCarousel>
          {data.cast.map((item, index: number) =>
            type === "tv_credits" ? (
              <TvCard key={index} movie={item} />
            ) : (
              <PosterCard key={index} movie={item}></PosterCard>
            )
          )}
        </CardCarousel>
      </div>
    );
}
