import React from "react";
import { Link } from "react-router-dom";

function Category({ src, name, datas }) {
  return (
    <Link
      to="/submenu"
      state={{ title: name, datas: datas }}
      className="category"
    >
      <img src={src} alt="" />
      <p>{name}</p>
    </Link>
  );
}

export default Category;
