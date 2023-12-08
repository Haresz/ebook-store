import React from "react";
import { createRoot } from "react-dom/client";
import "./style/style.scss";
import Headline from "./component/headline";

const root = createRoot(document.getElementById("root"));
root.render(<Headline name="REGISTER" />);
