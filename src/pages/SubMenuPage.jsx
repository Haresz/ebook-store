import React from "react";
import Navbar from "../component/Navbar";
import ContainerCardBook from "../component/ContainerCardBook";
import Footer from "../component/Footer";
import { useLocation } from "react-router-dom";

function SubMenuPage() {
  let { state } = useLocation();

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

export default SubMenuPage;
