import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import s from "./MovieDetailsPage.module.css";
import { Link, useNavigate } from "react-router-dom";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const BASE_URL = "http://image.tmdb.org/t/p/";
  const POSTER_SIZE = "w500";

  const fetchApi = (id) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=ad2b88c9f96a48fd32a0d282253d7de2`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchApi(id);
  }, [id, setMovie]);

  const {
    original_title,
    poster_path,
    vote_average,
    overview,
    genres,
    release_date,
  } = movie;
  const userScore = vote_average * 10;

  return (
    <>
      <button className={s.backBtn} onClick={goBack}>
        Go back
      </button>
      <div className={s.Container}>
        <div className={s.MovieInfo}>
          {poster_path !== undefined ? (
            <img
              className={s.MovieInfoImg}
              src={`${BASE_URL}${POSTER_SIZE}${poster_path}`}
              alt="movie poster"
            />
          ) : (
            `movie poster image`
          )}
          <div className={s.MovieInfoWrapper}>
            <h2 className={s.MovieInfoHeader}>{original_title}</h2>
            <div className={s.MovieReleaseWrapper}>
              <p className={s.MovieDate}>{release_date} / </p>
              <ul className={s.GenresList}>
                {genres !== undefined
                  ? genres.map(({ id, name }) => (
                      <li className={s.GenresItem} key={id}>
                        {name}
                        {", "}
                      </li>
                    ))
                  : `No genres`}
              </ul>
            </div>
            <p className={s.MovieInfoDescription}>User Score: {userScore}%</p>
            <h3 className={s.Overview}>Overview:</h3>
            <p className={s.OverviewDescr}>{overview}</p>
            <ul className={s.InfoList}>
              <li className={s.InfoItems}>
                <Link className={s.InfoItem} to={`/movies/${id}/cast`}>
                  Cast
                </Link>
              </li>
              <li className={s.InfoItems}>
                <Link className={s.InfoItem} to={`/movies/${id}/reviews`}>
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetailsPage;