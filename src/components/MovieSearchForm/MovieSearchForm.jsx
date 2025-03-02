import { useState } from 'react';
import { useSearchParams } from 'react-router-dom'
import Button from '../Button/Button';
import {form, input} from './MovieSearchForm.module.css';

function MovieSearchForm({ onSubmitForm }) {
  // const { query } = useParams();
  const [query, setQuery] = useState('');
  const [params, setParams] = useSearchParams()

  const handleQueryChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
    params.set('query', e.target.value)
    setParams(params)
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    onSubmitForm(query);
  };

  return (
    <form className={form} onSubmit={handleSubmitForm}>
      <input
        className={input}
        type="text"
        autoComplete="off"
        placeholder="Search Movies"
        value={query}
        autoFocus
        onChange={handleQueryChange}
      />
      <Button type="submit" title="Search" />
    </form>
  );
}

export default MovieSearchForm;