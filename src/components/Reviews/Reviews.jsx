import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ReviewsItem from "../ReviewsItem/ReviewsItem";
import s from "./Reviews.module.css";

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  const fetchReviews = (id) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=ad2b88c9f96a48fd32a0d282253d7de2`
    )
      .then((response) => response.json())
      .then((data) => {
        setReviews(data.results);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchReviews(id);
  }, [id, setReviews]);

  return (
    <>
      <ul className={s.ReviewsList}>
        {reviews !== null
          ? reviews.map(({ id, author, content }) => (
              <ReviewsItem key={id} id={id} author={author} content={content} />
            ))
          : `Sorry, no review yet`}
      </ul>
    </>
  );
};

export default Reviews;