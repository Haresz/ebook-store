import React from "react";
import CardBook from "./CardBook.jsx";

function ContainerCardBook(props) {
  return (
    <div className="container-cardbook">
      <div className="title-container-cardbook">
        <h3>{props.title}</h3>
        <a src={props.src}>Lihat semua</a>
      </div>
      <div className="container-content">
        <CardBook
          src="public/book/book-1.png"
          title="title1"
          author="author1"
        />
        <CardBook
          src="public/book/book-2.png"
          title="title2"
          author="author2"
        />
        <CardBook
          src="public/book/book-3.png"
          title="title3"
          author="author3"
        />
        <CardBook
          src="public/book/book-4.png"
          title="title4"
          author="author4"
        />
      </div>
    </div>
  );
}

export default ContainerCardBook;
