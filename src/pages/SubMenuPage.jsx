import React from "react";
import Navbar from "../component/Navbar";
import ContainerCardBook from "../component/ContainerCardBook";
import DataBook from "../utils/data";
import Footer from "../component/Footer";

function RekomendasiBuku({ title, datas }) {
  return (
    <>
      <Navbar detail={false} />
      <ContainerCardBook title={title} datas={datas} dashboard={false} />
      <Footer />
    </>
  );
}

export default RekomendasiBuku;
