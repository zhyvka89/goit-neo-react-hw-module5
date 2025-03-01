import { Link, useLocation } from 'react-router-dom';
// import styles from './MoviesList.module.scss';

function MoviesList({ array }) {
  const location = useLocation();
  console.log(location)
  
  return (
    <ol>
      {array.map(
        ({ id, release_date, poster_path, vote_average, backdrop_path }) => (
          <li key={id}>
            {location.pathname === '/' ? (
              <Link
                to={`movies/${id}`}
                state={location}
              >
                <div>
                  <img
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                        : `https://image.tmdb.org/t/p/w500/${backdrop_path}`
                    }
                    alt="movie"
                  />
                  <div>
                    <span>{release_date}</span>
                    <br />
                    <span>
                      {vote_average}
                    </span>
                  </div>
                </div>
              </Link>
            ) : (
              <Link
                to={`${id}`}
                state={location}
              >
                <div>
                  <img
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                        : `https://image.tmdb.org/t/p/w500/${backdrop_path}`
                    }
                    alt="movie"
                  />
                  <div>
                    <span>{release_date}</span>
                    <br />
                    <span>
                      {vote_average}
                    </span>
                  </div>
                </div>
              </Link>
            )}
           
           
          </li>
        )
      )}
    </ol>
  );
}

export default  MoviesList;