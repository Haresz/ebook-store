import React from "react";
import { createRoot } from "react-dom/client";
import "./style/style.scss";
import CardBook from "./component/CardBook";

const root = createRoot(document.getElementById("root"));
root.render(
  <CardBook
    src="public/book/book-1.png"
    title="How to Win Friends & Influence People."
    author="Dale Carnegie"
  />
);
