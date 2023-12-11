import React from "react";
import CardBook from "./CardBook.jsx";

function ContainerCardBook(props, { datas }) {
  return (
    <div className="container-cardbook">
      <div className="title-container-cardbook">
        <h3>{props.title}</h3>
        <a src={props.src}>Lihat semua</a>
      </div>
      <div className="container-content">
        {datas.map((data) => (
          <CardBook src={data.image} title={data.title} author={data.author} />
        ))}
      </div>
    </div>
  );
}

export default ContainerCardBook;
