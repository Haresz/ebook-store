import React from "react";
import Navbar from "../component/Navbar";
import Category from "../component/Category";
import ContainerCardBook from "../component/ContainerCardBook";
import DataBook from "../utils/data";
import Footer from "../component/Footer";

function Dashboard() {
  let rekomendasiBuku = [];
  let mostPopular = [];
  DataBook.map((data) => {
    if (data.isRecommended === true) {
      rekomendasiBuku.push(data);
      console.log(rekomendasiBuku);
    } else {
      mostPopular.push(data);
    }
  });
  return (
    <div className="dashboard">
      <Navbar dashboard={true} />
      <div className="dashboard-headline">
        <div className="background-left"></div>
        <h1>
          <section>Take your time,</section>
          <section>Enjoy your book</section>{" "}
          <section>Capcin Alwasy For You</section>
        </h1>
        <div className="background-right"></div>
      </div>
      <div className="container-category">
        <Category src="public/category-novel.svg" name="Novel" />
        <Category src="public/category-self.svg" name="Self Improvmen" />
        <Category src="public/category-economic.svg" name="Economic" />
        <Category src="public/category-education.svg" name="Education" />
        <Category src="public/category-forkids.svg" name="ForKids" />
      </div>
      <ContainerCardBook title="REKOMENDASI BUKU" datas={rekomendasiBuku} />
      <ContainerCardBook title="Most Popular" datas={mostPopular} />
      <div className="container-populer__author">
        <img
          className="btn btn-left"
          src="public/btn-left.svg"
          alt="button-left"
        />
        <div className="content-populer__author">
          <h3>Popular Author</h3>
          <div className="content">
            <div className="mark-manson">
              <img src="public/mark-manson.png" alt="mark-manson" />
              <h3>Mark Manson</h3>
              <p>
                Mark is the three-time #1 New York Times bestselling author of
                The Subtle Art of Not Giving a F*ck, as well as other titles.
                His books have sold around 20 million copies, been translated
                into more than 65 languages, and reached number one in more than
                a dozen countries.
              </p>
            </div>
            <img src="public/books.png" alt="" />
          </div>
        </div>
        <img
          className="btn btn-right"
          src="public/btn-right.svg"
          alt="button-right"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
