import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CastItem from "../CastItem/CastItem";
import s from "./Cast.module.css";

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  const fetchCast = (id) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=ad2b88c9f96a48fd32a0d282253d7de2`
    )
      .then((response) => response.json())
      .then((data) => {
        setCast(data.cast);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchCast(id);
  }, [id, setCast]);

  return (
    <>
      <ul className={s.CastList}>
        {cast !== null
          ? cast.map(({ id, name, profile_path, character }) => (
              <CastItem
                key={id}
                id={id}
                character={character}
                name={name}
                profile_path={profile_path}
              />
            ))
          : `Sorry, no cast here`}
      </ul>
    </>
  );
};

export default Cast;