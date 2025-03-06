import Title from "../../components/Title";
import ActorSection from "./ActorSection";
import styles from "./HomePage.module.css";
import MovieSection from "./MovieSection";

export default function HomePage() {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <Title>Сейчас в кино</Title>
        <MovieSection request="now_playing" />
      </div>
      <div className={styles.container}>
        <Title>Лучшее из лучшего </Title>
        <MovieSection request="top_rated" />
      </div>
      <div className={styles.container}>
        <Title>Популярное сейчас</Title>
        <MovieSection request="popular" />
      </div>
      <div className={styles.container}>
        <Title>Лица индустрии</Title>
        <ActorSection />
      </div>
    </div>
  );
}
