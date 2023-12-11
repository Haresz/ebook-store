import React from "react";
import { createRoot } from "react-dom/client";
import "./style/style.scss";
import Dashboard from "./pages/Dashboard";

const root = createRoot(document.getElementById("root"));
root.render(<Dashboard />);
