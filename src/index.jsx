import React from "react";
import { createRoot } from "react-dom/client";
import "./style/style.scss";
import NotifTambahUlasan from "./component/NotifTambahUlasa";

const root = createRoot(document.getElementById("root"));
root.render(<NotifTambahUlasan />);
