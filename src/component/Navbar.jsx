import React from "react";
import Input from "./Input";

function Navbar({ dashboard, detail }) {
  return (
    <nav>
      <div className="container-icon">
        <img src="public/icon.png" alt="" />
        <p>CAPCIN</p>
      </div>
      <div className="nav-right">
        {dashboard === true ? <img src="public/mybook.svg" alt="" /> : null}
        {detail === false || dashboard === true ? (
          <Input search={true} placeholder="Search" />
        ) : null}
        {dashboard === true ? (
          <div className="photo-profile-name">
            <img src="public/fotoprofil.svg" alt="fotoProfil" />
            <p>Hi Haresz!</p>
          </div>
        ) : null}
      </div>
    </nav>
  );
}

export default Navbar;
