import styles from "./HomePage.module.css";
import NowPlayingSection from "./NowPlayingSection";

export default function HomePage() {
  return (
    <div className={styles.hero}>
      <NowPlayingSection />
    </div>
  );
}
