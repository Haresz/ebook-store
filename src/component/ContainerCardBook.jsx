import React from "react";
import CardBook from "./CardBook.jsx";

function ContainerCardBook({ title, datas, src, dashboard }) {
  return (
    <div className="container-cardbook">
      <div className="title-container-cardbook">
        <h3>{title}</h3>
        {dashboard === true ? <a src={src}>Lihat semua</a> : null}
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
