import React from "react";
import CardBook from "./CardBook.jsx";

function ContainerCardBook({ title, datas, src }) {
  console.log(datas);
  return (
    <div className="container-cardbook">
      <div className="title-container-cardbook">
        <h3>{title}</h3>
        <a src={src}>Lihat semua</a>
      </div>
      <div className="container-content">
        {datas?.map((data) => (
          <CardBook
            key={data.title}
            src={data.image}
            title={data.title}
            author={data.author}
          />
        ))}
      </div>
    </div>
  );
}

export default ContainerCardBook;
