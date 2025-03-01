import { useEffect, useState } from 'react';
import * as moviesApi from '../../services/movies-api';
import { useParams } from 'react-router-dom';
// import styles from './Reviews.module.scss';

function MovieReviews() {
  const [review, setReview] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    moviesApi
      .fetchMovieReview(movieId)
      .then(({ results }) => setReview(results));
  }, [movieId]);

  return (
    <ol>
      {review.map(({ id, author, content }) => (
        <li key={id}>
          <h4>Author: {author}</h4>
          <p>{content}</p>
        </li>
      ))}
    </ol>
  );
}

export default MovieReviews