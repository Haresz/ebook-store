import React from "react";
import Navbar from "../component/Navbar";
import ContainerCardBook from "../component/ContainerCardBook";
import DataBook from "../utils/data";
import Footer from "../component/Footer";

function PopularPage() {
  let PopulerBuku = [];
  DataBook.map((data) => {
    if (data.isRecommended === true) {
      PopulerBuku.push(data);
    }
  });
  return (
    <>
      <Navbar detail={false} />
      <ContainerCardBook
        title="Most Popular"
        datas={PopulerBuku}
        dashboard={false}
      />
      <Footer />
    </>
  );
}

export default PopularPage;
