import { MovieResult } from "../../../types/MovieTypes";
import styles from "./About.module.css";

export default function AboutSection({ data }: { data: MovieResult }) {
  return (
    <div className={styles.grid}>
      <p className={styles.atribute}>Жанр</p>
      <p>
        {data.genres.map((genre, index) => {
          return (index ? ", " : " ") + genre.name;
        })}
      </p>
      <p className={styles.atribute}>Продолжительность</p>
      <p>
        {`${Math.floor(data.runtime / 60)}ч. 
    ${data.runtime % 60} мин.`}
      </p>

      <p className={styles.atribute}>Страна</p>
      <p>
        {data.production_countries.map((country, index) => {
          return (index ? ", " : " ") + country.name;
        })}
      </p>
      <p className={styles.atribute}>Бюджет</p>
      <p>${data.budget / 1000_000} млн.</p>

      <p className={styles.atribute}>Сборы</p>
      <p>${(data.revenue / 1000_000).toFixed(1)} млн. </p>
    </div>
  );
}
