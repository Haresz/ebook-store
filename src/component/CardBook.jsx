import React from "react";
import { Link } from "react-router-dom";

function CardBook(props) {
  console.log(props.year);
  return (
    <Link
      to="/detailBook"
      state={{
        title: props.title,
        author: props.author,
        year: props.year,
        jumlahHalaman: "100",
        image: props.src,
      }}
      className="card-book"
    >
      <img src={props.src} alt="" />
      <h4>{props.title}</h4>
      <p>{props.author}</p>
    </Link>
  );
}

export default CardBook;
