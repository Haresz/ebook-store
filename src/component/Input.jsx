import React from "react";

function Input({ label, name, placeholder, search }) {
  return (
    <div className="input-form">
      {search === true ? <img src="public/search.svg" /> : null}
      <label htmlFor="">{label}</label>
      <input name={label} id={label} placeholder={placeholder} type="text" />
    </div>
  );
}

export default Input;
