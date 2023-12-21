import React from "react";

function ButtonFill(props) {
  return (
    <button onClick={props.onClick} type={props.type} className="button-fill">
      {props.name}
    </button>
  );
}

export default ButtonFill;
