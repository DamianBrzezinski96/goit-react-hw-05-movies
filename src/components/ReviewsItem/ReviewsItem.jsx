import React from "react";
import s from "./ReviewsItem.module.css";

const ReviewsItem = ({ id, author, content }) => {
  return (
    <li className={s.ReviewsItems} id={id}>
      <p className={s.ReviewsDescription}>`{content}`</p>
      <h3 className={s.ReviewsAuthor}>Author: {author}</h3>
    </li>
  );
};

export default ReviewsItem;