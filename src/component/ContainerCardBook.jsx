import React from "react";
import CardBook from "./CardBook.jsx";
import { Link } from "react-router-dom";

function ContainerCardBook({ title, datas, dashboard }) {
  return (
    <div className="container-cardbook">
      <div className="title-container-cardbook">
        <h3>{title}</h3>
        {dashboard === true ? (
          <Link to="/submenu" state={{ title: title, datas: datas }}>
            Lihat semua
          </Link>
        ) : null}
      </div>
      <div className="container-content">
        {datas?.map((data, index) => (
          <CardBook
            key={index}
            index={index}
            src={data.image}
            title={data.title}
            year={data.year}
            author={data.author}
          />
        ))}
      </div>
    </div>
  );
}

export default ContainerCardBook;
