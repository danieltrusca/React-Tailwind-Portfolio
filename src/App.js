import React from "react";

// import components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import About from "./components/About";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Brands />
      <About />
      <div style={{ height: "2000px" }}></div>
    </div>
  );
};

export default App;
