import { PropsWithChildren } from "react";
import styles from "./CardCarousel.module.css";
export default function CardCarousel({ children }: PropsWithChildren) {
  return <div className={styles.carousel}>{children}</div>;
}
