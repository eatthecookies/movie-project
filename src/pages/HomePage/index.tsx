import Title from "../../components/Title";
import styles from "./HomePage.module.css";
import MovieSection from "./MovieSection";

export default function HomePage() {
  return (
    <div className={styles.hero}>
      <Title>В кинотеатрах</Title>
      <MovieSection request="now_playing" />
      <Title>Высокая оценка </Title>
      <MovieSection request="top_rated" />
      <Title>Популярные в данный момент</Title>
      <MovieSection request="popular" />
    </div>
  );
}
