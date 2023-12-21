import React from "react";

function ButtonFill({ onClick, type, name }) {
  return (
    <button onClick={onClick} type={type} className="button-fill">
      {name}
    </button>
  );
}

export default ButtonFill;
