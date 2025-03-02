import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as moviesApi from "../../services/movies-api";

import {
  cast_list,
  cast_item,
  cast_img_thumb,
  cast_img,
  text,
} from "./MovieCast.module.css";

function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    moviesApi.fetchMovieCast(movieId).then(({ cast }) => setCast(cast));
  }, [movieId]);

  return (
    <ul className={cast_list}>
      {cast.map(({ id, name, profile_path, character }) => {
        if (!profile_path) {
          return null;
        }
        return (
          <li className={cast_item} key={id}>
            <div className={cast_img_thumb}>
              <img
                className={cast_img}
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt="cast"
              />
              <div className={text}>
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
