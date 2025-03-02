import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieSearchForm from '../../components/MovieSearchForm/MovieSearchForm';
import MovieList from '../../components/MovieList/MovieList';
import * as moviesApi from '../../services/movies-api';


function MoviesPageView() {
  const [moviesByQuery, setMoviesByQuery] = useState([]);
  const [params, setParams] = useSearchParams();
  const query = params.get('query') ?? '';

  useEffect(() => {
    if (query === '') return;

    moviesApi.fetchMoviesByQuery(query).then(({ results }) => {
      setMoviesByQuery(results);
    });
  }, [query]);

  const onSubmitForm = e => {
    const form = e.currentTarget;
    const queryValue = form.elements.search.value.trim();
    params.set('query', queryValue)
    setParams(params)
  };

  
  return (
    <section>
      <MovieSearchForm onSubmitForm={onSubmitForm} query={query}/>
      <MovieList array={moviesByQuery}/>
    </section>
  );
}

export default MoviesPageView