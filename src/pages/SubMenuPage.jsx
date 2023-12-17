import React from "react";
import Navbar from "../component/Navbar";
import ContainerCardBook from "../component/ContainerCardBook";
import DataBook from "../utils/data";
import Footer from "../component/Footer";
import { useLocation } from "react-router-dom";

function RekomendasiBuku() {
  let { state } = useLocation();
  console.log(state.datas);

  return (
    <>
      <Navbar detail={false} />
      <ContainerCardBook
        title={state.title}
        datas={state.datas}
        dashboard={false}
      />
      <Footer />
    </>
  );
}

export default RekomendasiBuku;
