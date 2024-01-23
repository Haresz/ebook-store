import React, { useEffect, useState } from "react";
import CardBook from "./CardBook.jsx";
import { useNavigation, Link, useSearchParams } from "react-router-dom";

function ContainerCardBook({ title, datas, dashboard }) {
  const navigation = useNavigation();
  let [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");

  const dataFilters = datas?.filter((data) => {
    return data.title.toLowerCase().includes(q?.toLowerCase());
  });

  return (
    <div className="container-cardbook">
      <div className="title-container-cardbook">
        <h3>{title}</h3>
        {dashboard === true ? (
          <Link to="/submenu" state={{ datas: datas, title: title }}>
            Lihat semua
          </Link>
        ) : null}
      </div>
      <div className="container-content">
        {dataFilters?.length === 0 ||
        dataFilters === null ||
        dataFilters === undefined
          ? datas?.map((data, index) => (
              <CardBook
                key={index}
                index={index}
                src={data.image}
                title={data.title}
                year={data.year}
                author={data.author}
              />
            ))
          : dataFilters?.map((data, index) => (
              <CardBook
                key={index}
                index={index}
                src={data.image}
                title={data.title}
                year={data.year}
                author={data.author}
              />
            ))}
      </div>
    </div>
  );
}

export default ContainerCardBook;
