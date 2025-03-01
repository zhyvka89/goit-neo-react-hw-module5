import { useState } from 'react';
import Button from '../Button/Button';
// import styles from './MovieSearchForm.module.scss';

function MovieSearchForm({ onSubmitForm }) {
  const [query, setQuery] = useState('');

  const handleQueryChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    onSubmitForm(query);
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <input
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