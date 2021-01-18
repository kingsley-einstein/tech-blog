import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import logo from "./logo.svg";
import { Routes } from "./router";
import { Navbar, Button, Hamburger } from "./components";
import "./index.css";
import "bulma/css/bulma.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/css/brands.min.css";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/regular.min.css";
import "@fortawesome/fontawesome-free/css/solid.min.css";
import "@fortawesome/fontawesome-free/css/svg-with-js.min.css";

const App = () => {
 const [isMenuShown, setShown] = React.useState(false);
 const menuClassName = "navbar-menu";
 const menuCss = isMenuShown ? `${menuClassName} is-active` : menuClassName;

 const setMenuShown = () => setShown(!isMenuShown);

 return (
  <div>
   <div className="container is-fullhd">
    <Router>
     <Navbar className="navbar is-link is-transparent" role="navigation">
      <div className="navbar-brand">
       <Hamburger externalFunction={setMenuShown} />
      </div>
      <div id="menu" className={menuCss}>
       <div className="navbar-end">
        <div className="navbar-item">
         <div className="buttons">
          <Button className="button is-primary">Contact Me!</Button>
         </div>
        </div>
       </div>
      </div>
     </Navbar>
     <Routes />
    </Router>
   </div>
  </div>
 );
};

export default App;
