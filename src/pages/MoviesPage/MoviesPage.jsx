import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieSearchForm from '../../components/MovieSearchForm/MovieSearchForm';
import MovieList from '../../components/MovieList/MovieList';
import * as moviesApi from '../../services/movies-api';


function MoviesPageView() {
  const [query, setQuery] = useState('');
  const [moviesByQuery, setMoviesByQuery] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (query === '') return;

    moviesApi.fetchMoviesByQuery(query).then(({ results }) => {
      setMoviesByQuery(results);
    });
  }, [query]);

  useEffect(() => {
    const savedQuery = searchParams.get('query');

    if (savedQuery === null) return;

    moviesApi.fetchMoviesByQuery(savedQuery).then(({ results }) => {
      setMoviesByQuery(results);
    });
  }, [searchParams]);

  const onSubmitForm = query => {
    setQuery(query);
  };

  

  return (
    <section>
      <MovieSearchForm onSubmitForm={onSubmitForm}/>
      <MovieList array={moviesByQuery}/>
    </section>
  );
}

export default MoviesPageView