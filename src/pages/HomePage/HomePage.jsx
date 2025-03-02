import { useEffect, useState } from "react";
import * as moviesApi from "../../services/movies-api";
import MoviesList from "../../components/MoviesList/MoviesList";

import { container } from "./HomePage.module.css";

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    moviesApi.fetchTrendingMovies().then(({ results }) => setMovies(results));
  }, []);

  return (
    <section className={container}>
      {movies && <MoviesList array={movies} />}
    </section>
  );
}

export default HomePage;
