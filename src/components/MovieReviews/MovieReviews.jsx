import { useEffect, useState } from 'react';
import * as moviesApi from '../../services/movies-api';
import { useParams } from 'react-router-dom';

function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    moviesApi
      .fetchMovieReview(movieId)
      .then(({ results }) => setReviews(results));
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <ol>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ol>
      ) : (
        <p>No reviews</p>
      )}
    </div>
  );
}

export default MovieReviews