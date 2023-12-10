import React from "react";

function Category(props) {
  return (
    <div className="category">
      <img src={props.src} alt="" />
      <p>{props.name}</p>
    </div>
  );
}

export default Category;
