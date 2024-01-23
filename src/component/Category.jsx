import React from "react";
import { Link } from "react-router-dom";

function Category({ src, name, datas }) {
  // Instead of stringifying the entire object, encode it properly
  console.log("category", datas);
  return (
    <Link
      to={`/submenu`}
      state={{ datas: datas, title: name }}
      className="category"
    >
      <img src={src} alt="" />
      <p>{name}</p>
    </Link>
  );
}

export default Category;
