import React from "react";
import { createRoot } from "react-dom/client";
import "./style/style.scss";
import ContainerCardBook from "./component/ContainerCardBook";

const root = createRoot(document.getElementById("root"));
root.render(<ContainerCardBook title="REKOMENDASI BUKU" />);
