import React from "react";
import { createRoot } from "react-dom/client";
import "./style/style.scss";
import LoginPage from "./pages/LoginPage";

const root = createRoot(document.getElementById("root"));
root.render(<LoginPage />);
