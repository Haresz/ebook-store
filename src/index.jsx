import React from "react";
import { createRoot } from "react-dom/client";
import "./style/style.scss";
import DetailBook from "./pages/DetailBook";

const root = createRoot(document.getElementById("root"));
root.render(<DetailBook />);
