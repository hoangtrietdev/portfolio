import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import About from "./components/About";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Portfolio />
      <About />
      <Footer />
    </div>
  );
};

export default App;
