import { Link, useLocation } from "react-router-dom";
import {
  movie_list,
  movie_item,
  movie_img_thumb,
  movie_img,
  link,
  text,
  title,
} from "./MovieList.module.css";

const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

function MovieList({ array }) {
  const location = useLocation();

  return (
    <ul className={movie_list}>
      {array.map(({ id, release_date, poster_path, original_title }) => (
        <li className={movie_item} key={id}>
          {location.pathname === "/" ? (
            <Link className={link} to={`movies/${id}`} state={location}>
              <div className={movie_img_thumb}>
                <img
                  className={movie_img}
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                      : defaultImg
                  }
                  alt="movie"
                />
                <div className={text}>
                  <span>{release_date}</span>
                  <br />
                  <span className={title}>{original_title}</span>
                </div>
              </div>
            </Link>
          ) : (
            <Link className={link} to={`${id}`} state={location}>
              <div className={movie_img_thumb}>
                <img
                  className={movie_img}
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                      : defaultImg
                  }
                  alt="movie"
                />
                <div className={text}>
                  <span>{release_date}</span>
                  <br />
                  <span className={title}>{original_title}</span>
                </div>
              </div>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
