import React from "react";
import { createRoot } from "react-dom/client";
import "./style/style.scss";
import NotifAddBokk from "./component/NotifAddBook";

const root = createRoot(document.getElementById("root"));
root.render(<NotifAddBokk />);
