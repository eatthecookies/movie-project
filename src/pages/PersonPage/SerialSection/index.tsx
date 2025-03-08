import TvCard from "../../../components/TvCard";
import { useFetchData } from "../../../hooks/useFetchData";
import { TvCredits } from "../../../types/TvTypes";
import CardCarousel from "../../HomePage/CardCarousel";

export default function SerialSection({ serialId }: { serialId: number }) {
  const { data } = useFetchData<TvCredits>(
    "/person/" + serialId + "/movie_credits"
  );

  if (data)
    return (
      <div>
        <CardCarousel>
          {data.cast.map((item, index) => (
            <TvCard key={index} movie={item}></TvCard>
          ))}
        </CardCarousel>
      </div>
    );
}
