import React from "react";
import Navbar from "../Navbar";
import Button from "../Button";
import Hamburger from "../Hamburger";

const Header = () => {
  const [isMenuShown, setShown] = React.useState(false);
  const menuClassName = "navbar-menu";
  const menuCss = isMenuShown ? `${menuClassName} is-active` : menuClassName;

  const setMenuShown = () => setShown(!isMenuShown);
  return (
    <Navbar className="navbar is-warning is-spaced" role="navigation">
      <div className="navbar-brand">
        <h4 className="title is-4 is-spaced navbar-item">
          The Weird Developer
        </h4>
        <Hamburger externalFunction={setMenuShown} />
      </div>
      <div id="menu" className={menuCss}>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Button className="button is-link is-light" to="/">
                Home
              </Button>
              <Button className="button is-link is-light" to="/articles">
                Articles
              </Button>
              <Button className="button is-link is-light" to="/portfolio">
                Portfolio
              </Button>
              <Button className="button is-primary" to="/contact">
                Contact Me!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default Header;
