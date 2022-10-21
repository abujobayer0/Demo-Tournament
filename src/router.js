import "./App.css";
import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { NotFound, Root } from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <React.Fragment>
      <Route path="/" element={<Root />}>
        {/* <Route path="" element={<div></div>} /> */}
      </Route>
      <Route path="*" element={<NotFound />} />
    </React.Fragment>
  )
);

export default router;
