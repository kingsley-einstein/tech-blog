import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import logo from "./logo.svg";
import { Routes } from "./router";
import { Header, Footer } from "./components";
import "bulma/css/bulma.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/css/brands.min.css";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/regular.min.css";
import "@fortawesome/fontawesome-free/css/solid.min.css";
import "@fortawesome/fontawesome-free/css/svg-with-js.min.css";

const App = () => {
  return (
    <div>
      <div className="container is-fullhd">
        <Router>
          <Header />
          <Routes />
        </Router>
        <Footer />
      </div>
    </div>
  );
};

export default App;
