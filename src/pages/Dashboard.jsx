import React from "react";
import Navbar from "../component/Navbar";
import ContainerCardBook from "../component/ContainerCardBook";
import Footer from "../component/Footer";

function Dashboard() {
  return (
    <>
      <Navbar dashboard={true} />
      <div className="headline"></div>
    </>
  );
}

export default Dashboard;
