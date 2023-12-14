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
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.7867 1.00431C16.0112 0.313322 16.9888 0.313324 17.2133 1.0043L20.4157 10.8604C20.5831 11.3755 21.063 11.7242 21.6046 11.7242H31.9679C32.6945 11.7242 32.9965 12.6539 32.4088 13.0809L24.0246 19.1724C23.5865 19.4907 23.4032 20.0549 23.5705 20.5699L26.773 30.426C26.9975 31.117 26.2066 31.6916 25.6189 31.2646L17.2347 25.1731C16.7966 24.8548 16.2034 24.8548 15.7653 25.1731L7.38114 31.2646C6.79336 31.6916 6.00249 31.117 6.22701 30.426L9.42946 20.5699C9.5968 20.0549 9.41348 19.4907 8.97537 19.1724L0.591243 13.0809C0.00345707 12.6539 0.30554 11.7242 1.03208 11.7242H11.3954C11.937 11.7242 12.4169 11.3755 12.5843 10.8604L15.7867 1.00431Z"
                      fill="white"
                      stroke="black"
                      stroke-width="0.5"
                    />
                  </svg>
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.7867 1.00431C16.0112 0.313322 16.9888 0.313324 17.2133 1.0043L20.4157 10.8604C20.5831 11.3755 21.063 11.7242 21.6046 11.7242H31.9679C32.6945 11.7242 32.9965 12.6539 32.4088 13.0809L24.0246 19.1724C23.5865 19.4907 23.4032 20.0549 23.5705 20.5699L26.773 30.426C26.9975 31.117 26.2066 31.6916 25.6189 31.2646L17.2347 25.1731C16.7966 24.8548 16.2034 24.8548 15.7653 25.1731L7.38114 31.2646C6.79336 31.6916 6.00249 31.117 6.22701 30.426L9.42946 20.5699C9.5968 20.0549 9.41348 19.4907 8.97537 19.1724L0.591243 13.0809C0.00345707 12.6539 0.30554 11.7242 1.03208 11.7242H11.3954C11.937 11.7242 12.4169 11.3755 12.5843 10.8604L15.7867 1.00431Z"
                      fill="white"
                      stroke="black"
                      stroke-width="0.5"
                    />
                  </svg>
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.7867 1.00431C16.0112 0.313322 16.9888 0.313324 17.2133 1.0043L20.4157 10.8604C20.5831 11.3755 21.063 11.7242 21.6046 11.7242H31.9679C32.6945 11.7242 32.9965 12.6539 32.4088 13.0809L24.0246 19.1724C23.5865 19.4907 23.4032 20.0549 23.5705 20.5699L26.773 30.426C26.9975 31.117 26.2066 31.6916 25.6189 31.2646L17.2347 25.1731C16.7966 24.8548 16.2034 24.8548 15.7653 25.1731L7.38114 31.2646C6.79336 31.6916 6.00249 31.117 6.22701 30.426L9.42946 20.5699C9.5968 20.0549 9.41348 19.4907 8.97537 19.1724L0.591243 13.0809C0.00345707 12.6539 0.30554 11.7242 1.03208 11.7242H11.3954C11.937 11.7242 12.4169 11.3755 12.5843 10.8604L15.7867 1.00431Z"
                      fill="white"
                      stroke="black"
                      stroke-width="0.5"
                    />
                  </svg>
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.7867 1.00431C16.0112 0.313322 16.9888 0.313324 17.2133 1.0043L20.4157 10.8604C20.5831 11.3755 21.063 11.7242 21.6046 11.7242H31.9679C32.6945 11.7242 32.9965 12.6539 32.4088 13.0809L24.0246 19.1724C23.5865 19.4907 23.4032 20.0549 23.5705 20.5699L26.773 30.426C26.9975 31.117 26.2066 31.6916 25.6189 31.2646L17.2347 25.1731C16.7966 24.8548 16.2034 24.8548 15.7653 25.1731L7.38114 31.2646C6.79336 31.6916 6.00249 31.117 6.22701 30.426L9.42946 20.5699C9.5968 20.0549 9.41348 19.4907 8.97537 19.1724L0.591243 13.0809C0.00345707 12.6539 0.30554 11.7242 1.03208 11.7242H11.3954C11.937 11.7242 12.4169 11.3755 12.5843 10.8604L15.7867 1.00431Z"
                      fill="white"
                      stroke="black"
                      stroke-width="0.5"
                    />
                  </svg>
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.7867 1.00431C16.0112 0.313322 16.9888 0.313324 17.2133 1.0043L20.4157 10.8604C20.5831 11.3755 21.063 11.7242 21.6046 11.7242H31.9679C32.6945 11.7242 32.9965 12.6539 32.4088 13.0809L24.0246 19.1724C23.5865 19.4907 23.4032 20.0549 23.5705 20.5699L26.773 30.426C26.9975 31.117 26.2066 31.6916 25.6189 31.2646L17.2347 25.1731C16.7966 24.8548 16.2034 24.8548 15.7653 25.1731L7.38114 31.2646C6.79336 31.6916 6.00249 31.117 6.22701 30.426L9.42946 20.5699C9.5968 20.0549 9.41348 19.4907 8.97537 19.1724L0.591243 13.0809C0.00345707 12.6539 0.30554 11.7242 1.03208 11.7242H11.3954C11.937 11.7242 12.4169 11.3755 12.5843 10.8604L15.7867 1.00431Z"
                      fill="white"
                      stroke="black"
                      stroke-width="0.5"
                    />
                  </svg>
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
