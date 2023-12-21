import React from "react";
import { Link } from "react-router-dom";

function Category({ src, name, datas }) {
  // Instead of stringifying the entire object, encode it properly
  const dataObject = encodeURIComponent(JSON.stringify(datas));
  const title = encodeURIComponent(JSON.stringify(name));

  return (
    <Link to={`/submenu/${dataObject}/${title}`} className="category">
      <img src={src} alt="" />
      <p>{name}</p>
    </Link>
  );
}

export default Category;
