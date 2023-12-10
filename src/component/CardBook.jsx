import React from "react";

function CardBook(props) {
  return (
    <div className="card-book">
      <img src={props.src} alt="" />
      <h4>{props.title}</h4>
      <p>{props.author}</p>
    </div>
  );
}

export default CardBook;
