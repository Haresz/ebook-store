import React from "react";
import { createRoot } from "react-dom/client";
import "./style/style.scss";
import Navbar from "./component/Navbar";

const root = createRoot(document.getElementById("root"));
root.render(<Navbar />);
