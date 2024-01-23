import React, { useState } from "react";
import Input from "./Input";
import { Link, useSearchParams } from "react-router-dom";
import DataBook from "../utils/data";

function Navbar({ dashboard, detail, datas }) {
  const mybook = datas;
  let [searchParams, setSearchParams] = useSearchParams({ q: "" });
  const q = searchParams.get("q");
  return (
    <nav>
      <Link to="/dashboard" className="container-icon">
        <img src="public/icon.png" alt="" />
        <p>CAPCIN</p>
      </Link>
      <div className="nav-right">
        {dashboard === true ? (
          <Link to="/submenu" state={{ title: "MY BOOK", datas: mybook }}>
            <img src="public/mybook.svg" alt="" />{" "}
          </Link>
        ) : null}
        {detail === false || dashboard === true ? (
          <Input
            value={q}
            onChange={(e) =>
              setSearchParams(
                (prev) => {
                  prev.set("q", e.target.value);
                  return prev;
                },
                { replace: true }
              )
            }
            search={true}
            placeholder="Search"
          />
        ) : null}
        {dashboard === true ? (
          <div className="photo-profile-name">
            <img src="../public/fotoprofil.svg" alt="fotoProfil" />
            <p>Hi Haresz!</p>
          </div>
        ) : null}
      </div>
    </nav>
  );
}

export default Navbar;
