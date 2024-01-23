import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Category from "../component/Category";
import ContainerCardBook from "../component/ContainerCardBook";
import DataBook from "../utils/data";
import Footer from "../component/Footer";
import { db } from "../firebase";
import { onValue, ref } from "firebase/database";

function Dashboard() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const query = ref(db, "/datas");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      console.log(data, "halo");
      if (snapshot.exists()) {
        Object.values(data).map((book) => {
          setDatas((books) => [...books, book]);
        });
      }
    });
  }, []);

  console.log(datas);

  const rekomendasiBuku = datas.filter((data) => data.isRecommended);
  const mostPopular = datas.filter((data) => !data.isRecommended).slice(0, 4);
  const novel = datas.filter((data) => data.category === "novel");
  const selfimprovement = datas.filter(
    (data) => data.category === "self-imporovment"
  );
  const economic = datas.filter((data) => data.category === "economic");
  const education = datas.filter((data) => data.category === "education");
  const forkids = datas.filter((data) => data.category === "for-kids");

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
