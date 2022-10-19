import "./App.css";
import React from "react";
import {
  About,
  Banner,
  Footer,
  Navbar,
  Prize,
  Rules,
  Thanks,
} from "./components";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      <About />
      <Rules />
      <Prize />
      <Thanks />
      <Footer />
    </React.Fragment>
  );
}

export default App;
