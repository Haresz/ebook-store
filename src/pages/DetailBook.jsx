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
              <h4>100</h4>
              <p>Halaman</p>
            </div>
          </div>
          <ButtonFill name="ADD BOOK" />
          <div className="container-about__book">
            <div className="title-about__book">
              <h3>About Book</h3>
              <img src="public/arrow-bottom.svg" alt="" />
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
              optio harum nobis possimus tenetur mollitia corrupti, blanditiis
              corporis eveniet suscipit eos ipsum autem laudantium quibusdam.
              Fugit quibusdam quam voluptatem velit? ....
            </p>
          </div>
          <div className="container-rating__book">
            <h3>Rating Book</h3>
            <div className="content-rating__book">
              <div className="average-rating">
                <h1>3,5</h1>
                <div className="container-star">
                  <img src="public/star.svg" alt="" />
                  <img src="public/star.svg" alt="" />
                  <img src="public/star.svg" alt="" />
                  <img src="public/star.svg" alt="" />
                  <img src="public/star.svg" alt="" />
                </div>
              </div>
              <div className="container-resume-rate">
                <div className="resume-rate resume-rate__5">
                  <p>5</p>
                  <hr className="line" />
                </div>
                <div className="resume-rate resume-rate__4">
                  <p>4</p>
                  <hr className="line" />
                </div>
                <div className="resume-rate resume-rate__3">
                  <p>3</p>
                  <hr className="line" />
                </div>
                <div className="resume-rate resume-rate__2">
                  <p>2</p>
                  <hr className="line" />
                </div>
                <div className="resume-rate resume-rate__1">
                  <p>1</p>
                  <hr className="line" />
                </div>
                <section>100 ulasan</section>
              </div>
            </div>
            <ButtonFill name="Tambah Ulasan" />
          </div>
        </div>
        <img src="public/book/book-4.png" alt="" />
      </div>
      <Footer />
    </div>
  );
}

export default DetailBook;
