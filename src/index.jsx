import React from "react";
import { createRoot } from "react-dom/client";
import "./style/style.scss";
import Input from "./component/Input";

const root = createRoot(document.getElementById("root"));
root.render(<Input placeholder="Silahkan isi" label="ini label" />);
