import { useEffect, useState } from 'react';
import * as moviesApi from '../../services/movies-api';
import MoviesList from '../../components/MoviesList/MoviesList';

// import styles from './HomePageView.module.scss';

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    moviesApi.fetchTrendingMovies().then(({ results }) => setMovies(results));
  }, []);

  return (
    <section>
      {movies && <MoviesList array={movies}/>}
    </section>
  );
}

export default HomePage