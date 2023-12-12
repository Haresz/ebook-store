import React from "react";
import { createRoot } from "react-dom/client";
import "./style/style.scss";
import PopularPage from "./pages/PopularPage";

const root = createRoot(document.getElementById("root"));
root.render(<PopularPage />);
