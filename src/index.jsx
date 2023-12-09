import React from "react";
import { createRoot } from "react-dom/client";
import "./style/style.scss";
import RegisterPage from "./pages/RegisterPage";

const root = createRoot(document.getElementById("root"));
root.render(<RegisterPage />);
