import React from "react";
import s from "./CastItem.module.css";

const CastItem = ({ id, name, profile_path, character }) => {
  const BASE_URL = "http://image.tmdb.org/t/p/";
  const POSTER_SIZE = "w200";
  const poster = `${BASE_URL}${POSTER_SIZE}${profile_path}`;

  return (
    <li className={s.CastItem} key={id}>
      {profile_path !== null ? (
        <img className={s.CastItemImg} src={poster} alt="poster" />
      ) : (
        `no image`
      )}
      <p className={s.CastItemName}>{name}</p>
      <p className={s.CastItemChar}>{character}</p>
    </li>
  );
};

export default CastItem;