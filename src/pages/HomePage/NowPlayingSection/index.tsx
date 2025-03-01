import { Link } from "react-router";
import { useFetchData } from "../../../hooks/useFetchData";
import CardCarousel from "../CardCarousel";
import PosterCard from "../../../components/PosterCard";

export default function NowPlayingSection() {
  const data = useFetchData("/movie/now_playing");
  return (
    <div>
      <CardCarousel>
        {data && data.results.map((val) => <PosterCard movie={val} />)}
      </CardCarousel>
    </div>
  );
}
