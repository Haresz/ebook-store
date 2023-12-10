import React from "react";
import Input from "./Input";

function Navbar() {
  return (
    <nav>
      <div className="container-icon">
        <img src="public/icon.png" alt="" />
        <p>CAPCIN</p>
      </div>
      <div className="nav-right">
        <img src="public/mybook.svg" alt="" />
        <Input dashboard={true} placeholder="Search" />
        <div className="photo-profile-name">
          <img src="public/fotoprofil.svg" alt="fotoProfil" />
          <p>Hi Haresz!</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
