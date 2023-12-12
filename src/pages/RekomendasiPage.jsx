import React from "react";
import Navbar from "../component/Navbar";
import ContainerCardBook from "../component/ContainerCardBook";
import DataBook from "../utils/data";
import Footer from "../component/Footer";

function RekomendasiBuku() {
  let rekomendasiBuku = [];
  DataBook.map((data) => {
    if (data.isRecommended === true) {
      rekomendasiBuku.push(data);
      console.log(rekomendasiBuku);
    }
  });
  return (
    <>
      <Navbar detail={false} />
      <ContainerCardBook
        title="REKOMENDASI BUKU"
        datas={rekomendasiBuku}
        dashboard={false}
      />
      <Footer />
    </>
  );
}

export default RekomendasiBuku;
