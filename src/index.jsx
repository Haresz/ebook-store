import React from "react";
import { createRoot } from "react-dom/client";
import "./style/style.scss";
import Category from "./component/Category.jsx";

const root = createRoot(document.getElementById("root"));
root.render(<Category src="public/category-novel.svg" name="Novel" />);
