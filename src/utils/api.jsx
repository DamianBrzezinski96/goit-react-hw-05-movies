import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";

export const fetchApi = () => {
  const [isLoaded, setLoaded] = useState(false);

  const fetchMovies = () => {
    try {
      const response = fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=ad2b88c9f96a48fd32a0d282253d7de2&page=1`
      );
      if (!response.ok) {
        setLoaded(false);
        throw new Error(response.status);
      } else {
        return response.json();
      }
    } catch (err) {
      setLoaded(false);
      return console.log(err);
    }
  };
};
export default fetchApi;