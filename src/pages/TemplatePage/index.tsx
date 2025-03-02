import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./Template.module.css";

export default function TemplatePage() {
  return (
    <div className={styles.page}>
      <Header />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}
