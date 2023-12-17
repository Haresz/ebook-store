import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./style/style.scss";
import Dashboard from "./pages/Dashboard";
import SubMenuPage from "./pages/SubMenuPage";
import DetailBook from "./pages/DetailBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/submenu",
    element: <SubMenuPage />,
  },
  {
    path: "/detailBook",
    element: <DetailBook />,
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
