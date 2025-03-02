import { NavLink } from "react-router-dom";
import { card_wrapper, link, activeLink } from "./MovieCard.module.css";

function MovieCard({ movie }) {
  const {
    backdrop_path,
    original_title,
    vote_average,
    overview,
    genres,
    release_date,
    poster_path,
  } = movie;

  return (
    <div className={card_wrapper}>
      <div>
        <img
          src={
            backdrop_path
              ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
              : `https://image.tmdb.org/t/p/w500/${poster_path}`
          }
          alt="movie"
        />
        <h1>{original_title}</h1>
        <h4>{release_date}</h4>
        <span>{vote_average}</span>
        <ul>
          {genres.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
      <div>
        <p>{overview}</p>
      </div>
      <ul>
        <li>
          <NavLink
            to={"cast"}
            className={({ isActive }) =>
              `${link} ` + (isActive ? `${activeLink}` : "")
            }
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"reviews"}
            className={({ isActive }) =>
              `${link} ` + (isActive ? `${activeLink}` : "")
            }
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MovieCard;
