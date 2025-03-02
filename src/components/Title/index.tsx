import { PropsWithChildren } from "react";
import styles from "./Title.module.css";

export default function Title({ children }: PropsWithChildren) {
  return <div className={styles.title}>{children}</div>;
}
