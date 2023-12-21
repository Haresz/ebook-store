import React from "react";
import Navbar from "../component/Navbar";
import ContainerCardBook from "../component/ContainerCardBook";
import Footer from "../component/Footer";
import { useParams } from "react-router-dom";

function SubMenuPage() {
  const { datas, title } = useParams();

  // No need to decodeURIComponent and then parse to JSON separately,
  // you can directly parse the parameters received from useParams
  const dataArray = JSON.parse(datas);
  const dataTitle = JSON.parse(title);

  console.log(dataArray);

  return (
    <>
      <Navbar detail={false} />
      <ContainerCardBook
        title={dataTitle}
        datas={dataArray}
        dashboard={false}
      />
      <Footer />
    </>
  );
}

export default SubMenuPage;
