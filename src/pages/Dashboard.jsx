import React from "react";
import Navbar from "../component/Navbar";
import Category from "../component/Category";
import ContainerCardBook from "../component/ContainerCardBook";
import DataBook from "../utils/data";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";

function Dashboard() {
  const rekomendasiBuku = DataBook.filter((data) => data.isRecommended);
  const mostPopular = DataBook.filter((data) => !data.isRecommended).slice(
    0,
    4
  );
  const novel = DataBook.filter((data) => data.category === "novel");
  const selfimprovement = DataBook.filter(
    (data) => data.category === "self-imporovment"
  );
  const economic = DataBook.filter((data) => data.category === "economic");
  const education = DataBook.filter((data) => data.category === "education");
  const forkids = DataBook.filter((data) => data.category === "for-kids");

  return (
    <div className="dashboard">
      <Navbar dashboard={true} />
      <div className="dashboard-headline">
        <div className="background-left"></div>
        <h1>
          <section>Take your time,</section>
          <section>Enjoy your book</section>{" "}
          <section>Capcin Always For You</section>
        </h1>
        <div className="background-right"></div>
      </div>
      <div className="container-category">
        <Category src="public/category-novel.svg" name="Novel" datas={novel} />
        <Category
          src="public/category-self.svg"
          name="Self Improvement"
          datas={selfimprovement}
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
          name="For Kids"
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
      {/* ... (sisa kode) ... */}
      <Footer />
    </div>
  );
}

export default Dashboard;
