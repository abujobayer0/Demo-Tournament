import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./router";
import AuthProvider from "./context/AuthProvider";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster position="top-center" reverseOrder={false} />
    </AuthProvider>
  </React.StrictMode>
);
