import React from "react";

function Input(props) {
  return (
    <div className="input-form">
      <label htmlFor="">{props.label}</label>
      <input
        name={props.label}
        id={props.label}
        placeholder={props.placeholder}
        type="text"
      />
    </div>
  );
}

export default Input;
