import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export default function TemplatePage() {
  return (
    <div>
      <Header />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}
