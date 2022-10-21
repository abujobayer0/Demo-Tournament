import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./router";
import AuthProvider from "./context/AuthProvider";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
