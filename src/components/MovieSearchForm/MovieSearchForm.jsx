import { useParams } from 'react-router-dom'
import Button from '../Button/Button';
import {form, input} from './MovieSearchForm.module.css';

function MovieSearchForm({ onSubmitForm}) {
  const { query } = useParams();

  const handleSubmitForm = e => {
    e.preventDefault();
    onSubmitForm(e);
  };

  return (
    <form className={form} onSubmit={handleSubmitForm}>
      <input
        className={input}
        type="text"
        name='search'
        autoComplete="off"
        placeholder="Search Movies"
        value={query}
        autoFocus
      />
      <Button type="submit" title="Search" />
    </form>
  );
}

export default MovieSearchForm;