import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./style/style.scss";
import Dashboard from "./pages/Dashboard";
import SubMenuPage from "./pages/SubMenuPage";
import DetailBook from "./pages/DetailBook";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/dashboard",
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
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      {isLoggedIn ? <Dashboard /> : <LoginPage />}
    </RouterProvider>
  </React.StrictMode>
);
