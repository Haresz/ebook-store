import React from "react";
import Input from "./Input";
import { Link } from "react-router-dom";
import DataBook from "../utils/data";

function Navbar({ dashboard, detail }) {
  return (
    <nav>
      <div className="container-icon">
        <img src="public/icon.png" alt="" />
        <p>CAPCIN</p>
      </div>
      <div className="nav-right">
        {dashboard === true ? (
          <Link to="/submenu" state={{ title: "MY BOOK", datas: DataBook }}>
            <img src="public/mybook.svg" alt="" />{" "}
          </Link>
        ) : null}
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
