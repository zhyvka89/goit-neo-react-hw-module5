import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import * as moviesApi from '../../services/movies-api';

// import styles from './Cast.module.scss';

function MovieCast() {
  const { movieId } = useParams();
  // const location = useLocation();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    moviesApi.fetchMovieCast(movieId).then(({ cast }) => setCast(cast));
  }, [movieId]);

  return (
    <ul>
      {cast.map(({ id, name, profile_path, character }) => {
        if (!profile_path) {
          return null;
        }
        return (
          <li key={id}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt="cast"
              />
              <div>
                <p>{name}</p>
                <p>{character}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default MovieCast;