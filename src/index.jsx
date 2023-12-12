import React from "react";
import { createRoot } from "react-dom/client";
import "./style/style.scss";
import RekomendasiBuku from "./pages/RekomendasiPage";

const root = createRoot(document.getElementById("root"));
root.render(<RekomendasiBuku />);
