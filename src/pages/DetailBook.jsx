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
            <div className="category-product">
              <img src="public/mybook.svg" alt="" />
              <p>E-book</p>
            </div>
            <hr />
            <div className="category-product category-product__detail">
              <p>100</p>
              <p>Halaman</p>
            </div>
          </div>
          <ButtonFill name="ADD BOOK" />
          <div className="container-about__book">
            <div className="title-about__book">
              <h2>About Book</h2>
              <img src="public/arrow-bottom.svg" alt="" />
            </div>
          </div>
          <div className="container-rating__book">
            <h2>Rating Book</h2>
            <div className="content-rating__book">
              <h1>3,5</h1>
              <div className="resume-rate">
                <div className="resume-rate resume-rate__5">
                  <p>5</p>
                  <div className="line"></div>
                </div>
                <div className="resume-rate resume-rate__4">
                  <p>4</p>
                  <div className="line"></div>
                </div>
                <div className="resume-rate resume-rate__3">
                  <p>3</p>
                  <div className="line"></div>
                </div>
                <div className="resume-rate resume-rate__2">
                  <p>2</p>
                  <div className="line"></div>
                </div>
                <div className="resume-rate resume-rate__1">
                  <p>1</p>
                  <div className="line"></div>
                </div>
                <p>100 ulasan</p>
              </div>
              <ButtonFill name="Tambah Ulasan" />
            </div>
          </div>
        </div>
        <img src="public/book/book-4.png" alt="" />
      </div>
      <Footer />
    </div>
  );
}

export default DetailBook;
