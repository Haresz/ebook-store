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
          <CardBook src={data.image} title={data.title} author={data.author} />
        ))}
      </div>
      <div className="container-populer__author">
        <img src="public/btn-left" alt="button-left" />
        <div className="content-populer__author">
          <h3>Popular Author</h3>
          <div className="content">
            <div className="mark-manson"></div>
          </div>
        </div>
        <img src="public/btn-right" alt="button-right" />
      </div>
    </div>
  );
}

export default ContainerCardBook;
