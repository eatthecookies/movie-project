import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/assets/styles/index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import SearchPage from "./pages/SearchPage";
import MoviePage from "./pages/MoviePage";
import HomePage from "./pages/HomePage";
import TemplatePage from "./pages/TemplatePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PersonPage from "./pages/PersonPage";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TemplatePage />}>
            <Route path="" element={<HomePage />} />
            <Route path="/movie/:id" element={<MoviePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/person/:id" element={<PersonPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
