import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import s from "./Movies.module.css";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useSearchParams();
  const query = searchQuery.get("query");

  const fetchSearchMovies = (query) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=ad2b88c9f96a48fd32a0d282253d7de2&query=${query}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((err) => console.log(err));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formQuery = form.elements.query.value;
    if (formQuery === "") {
      return;
    } else {
      setSearchQuery({ query: formQuery });
      fetchSearchMovies(query);
    }
    form.reset();
  };

  useEffect(() => {
    if (query === null || query === "" || movies === null) {
      setMovies([]);
      return;
    }
    fetchSearchMovies(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, setSearchQuery]);

  return (
    <div className={s.MovieWrapper}>
      <form className={s.MovieForm} onSubmit={onSubmit}>
        <input className={s.MovieInput} type="text" name="query" />
        <button className={s.MovieBtn} type="submit">
          Search
        </button>
      </form>
      <ul className={s.MovieList}>
        {movies.map(({ id, original_title }) => (
          <li data-icon="▶" className={s.MovieItem} key={id}>
            <Link className={s.MovieLink} to={`/movies/${id}`}>
              {original_title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;