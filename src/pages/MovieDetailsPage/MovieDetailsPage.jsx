import { useEffect, useState, Suspense, useRef } from "react";
import { useParams, Outlet, useNavigate, useLocation } from "react-router-dom";

import * as moviesApi from "../../services/movies-api";
import Button from "../../components/Button/Button";
import MovieCard from "../../components/MovieCard/MovieCard";

import { container } from "./MovieDetailsPage.module.css";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const backLink = useRef(location.state ?? "/");

  useEffect(() => {
    moviesApi.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  const handleGoBackBtn = () => {
    navigate(backLink.current);
  };

  return (
    <section className={container}>
      <Button title="Go Back" onBtnClick={handleGoBackBtn} />

      {movie && <MovieCard movie={movie} />}
      <Suspense fallback={<p>Loading child component..</p>}>
        <Outlet />
      </Suspense>
    </section>
  );
}

export default MovieDetailsPage;
