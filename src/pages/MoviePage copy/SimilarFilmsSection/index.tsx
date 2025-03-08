import PosterCard from "../../../components/PosterCard";
import { useFetchData } from "../../../hooks/useFetchData";
import { MovieResponse, MovieResult } from "../../../types/MovieTypes";
import CardCarousel from "../../HomePage/CardCarousel";
import styles from "../MoviePage.module.css";
export default function SimilarFilmsSection({ movieId }: { movieId: number }) {
  const { data } = useFetchData<MovieResponse>(
    "/movie/" + movieId + "/similar"
  );

  if (data && data.results.length)
    return (
      <div>
        <h2 className={styles.actorTitle}>Похожие</h2>
        <CardCarousel>
          {data.results.map((item: MovieResult, index) => (
            <PosterCard key={index} movie={item}></PosterCard>
          ))}
        </CardCarousel>
      </div>
    );
}
