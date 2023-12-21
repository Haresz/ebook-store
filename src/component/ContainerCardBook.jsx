import React, { useEffect, useState } from "react";
import CardBook from "./CardBook.jsx";
import { useNavigation, Link, useSearchParams } from "react-router-dom";

function ContainerCardBook({ title, datas, dashboard }) {
  const navigation = useNavigation();
  let [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");

  // const [dataFilters, setDataFilters] = useState([]);

  // Efek untuk memperbarui dataFilters saat nilai q berubah
  // useEffect(() => {
  //   // Filter datas berdasarkan nilai q
  //   const filteredData = datas?.filter((data) => {
  //     return data.title.toLowerCase().includes(q?.toLowerCase());
  //   });

  //   // Perbarui dataFilters
  //   setDataFilters(filteredData);
  // }, [q, datas]);

  const dataFilters = datas?.filter((data) => {
    return data.title.toLowerCase().includes(q?.toLowerCase());
  });

  console.log(dataFilters);
  console.log(q);

  return (
    <div className="container-cardbook">
      <div className="title-container-cardbook">
        <h3>{title}</h3>
        {dashboard === true ? (
          <Link to="/submenu" state={{ title: title, datas: datas }}>
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
