import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ButtonFill from "../component/ButtonFill";

function DetailBook() {
  return (
    <div>
      <Navbar />
      <div className="container-detail__book">
        <div className="content-detail__book">
          <h2>Great At Work</h2>
          <h4>Moren T. Hansen</h4>
          <p>1988</p>
          <div className="detail">
            <div className=""></div>
            <hr />
            <div></div>
          </div>
          <ButtonFill />
          <div className="container-about__book"></div>
          <div className="container-rating__book"></div>
        </div>
        <img src="public/book/book-4.png" alt="" />
      </div>
      <Footer />
    </div>
  );
}

export default DetailBook;
