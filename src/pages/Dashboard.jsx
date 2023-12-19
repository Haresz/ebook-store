import React from "react";
import Navbar from "../component/Navbar";
import Category from "../component/Category";
import ContainerCardBook from "../component/ContainerCardBook";
import DataBook from "../utils/data";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";

function Dashboard() {
  let rekomendasiBuku = [];
  let mostPopular = [];
  let novel = [];
  let selfimporov = [];
  let economic = [];
  let education = [];
  let forkids = [];
  DataBook.map((data) => {
    if (data.isRecommended === true) {
      rekomendasiBuku.push(data);
    } else if (data.isRecommended === false && mostPopular.length <= 3) {
      mostPopular.push(data);
    }
  });
  DataBook.map((data) => {
    if (data.category === "novel") {
      novel.push(data);
    } else if (data.category === "economic") {
      economic.push(data);
    } else if (data.category === "education") {
      education.push(data);
    } else if (data.category === "for-kids") {
      forkids.push(data);
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
        <Category src="public/category-novel.svg" name="Novel" datas={novel} />
        <Category
          src="public/category-self.svg"
          name="Self Improvmen"
          datas={selfimporov}
        />
        <Category
          src="public/category-economic.svg"
          name="Economic"
          datas={economic}
        />
        <Category
          src="public/category-education.svg"
          name="Education"
          datas={education}
        />
        <Category
          src="public/category-forkids.svg"
          name="ForKids"
          datas={forkids}
        />
      </div>
      <ContainerCardBook
        title="REKOMENDASI BUKU"
        datas={rekomendasiBuku}
        dashboard={true}
      />
      <ContainerCardBook
        title="Most Popular"
        datas={mostPopular}
        dashboard={true}
      />
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
