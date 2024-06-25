import React from "react";
import Home from "./Page/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import "./app.scss";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="app">
      <div className="width">
        <NavBar />
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default App;
