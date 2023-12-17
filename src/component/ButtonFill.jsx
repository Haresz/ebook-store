import React from "react";

function ButtonFill(props) {
  return (
    <button type={props.type} className="button-fill">
      {props.name}
    </button>
  );
}

export default ButtonFill;
