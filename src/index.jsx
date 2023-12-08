import React from "react";
import { createRoot } from "react-dom/client";
import "./style/style.scss";
import ButtonFill from "./component/ButtonFill";

const root = createRoot(document.getElementById("root"));
root.render(<ButtonFill name="Submit" />);
