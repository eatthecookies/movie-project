import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/assets/styles/index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import SearchPage from "./pages/SearchPage";
import MoviePage from "./pages/MoviePage";
import HomePage from "./pages/HomePage";
import TemplatePage from "./pages/TemplatePage";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TemplatePage />}>
          <Route path="" element={<HomePage />} />
          <Route path="/movie/:id" element={<MoviePage />} />
          <Route path="/search" element={<SearchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
