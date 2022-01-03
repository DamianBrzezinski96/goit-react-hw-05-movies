import React from "react";
import { Link } from "react-router-dom";
import s from "./MovieItems.module.css";

const MovieItems = ({ id, title }) => {
  return (
    <li className={s.MovieItemsItem} key={id}>
      <Link className={s.MovieItemsLink} to={`/movies/${id}`}>
        {title}
      </Link>
    </li>
  );
};

export default MovieItems;