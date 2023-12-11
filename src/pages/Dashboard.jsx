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
    </div>
  );
}

export default Dashboard;
