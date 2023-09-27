import * as React from "react";
import * as ReactDOM from "react-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/About us/AboutUs";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Reports from "./pages/Reports/Reports";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home leftContainer="Login" />,
  },
  {
    path: "/register",
    element: <Home leftContainer="Register" />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/reports",
    element: <Reports />,
  },
]);
// @ts-ignore
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
