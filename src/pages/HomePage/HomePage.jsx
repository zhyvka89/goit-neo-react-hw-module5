import { useEffect, useState } from "react";
import * as moviesApi from "../../services/movies-api";
import MovieList from "../../components/MovieList/MovieList";

import { container } from "./HomePage.module.css";

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    moviesApi.fetchTrendingMovies().then(({ results }) => setMovies(results));
  }, []);

  return (
    <section className={container}>
      {movies && <MovieList array={movies} />}
    </section>
  );
}

export default HomePage;
