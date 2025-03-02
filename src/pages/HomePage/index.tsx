import Title from "../../components/Title";
import ActorSection from "./ActorSection";
import styles from "./HomePage.module.css";
import MovieSection from "./MovieSection";

export default function HomePage() {
  return (
    <div className={styles.hero}>
      <Title>Сейчас в кино</Title>
      <MovieSection request="now_playing" />
      <Title>Лучшее из лучшего </Title>
      <MovieSection request="top_rated" />
      <Title>Популярное сейчас</Title>
      <MovieSection request="popular" />
      <Title>Лица индустрии</Title>
      <ActorSection />
    </div>
  );
}
