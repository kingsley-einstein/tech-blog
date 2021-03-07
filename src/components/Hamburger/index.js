/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Hamburger = ({ externalFunction = null }) => {
  const [isActive, setActive] = React.useState(false);
  const className = "navbar-burger";
  const css = isActive ? `${className} is-active` : className;

  const setState = () => {
    setActive(!isActive);
    if (externalFunction && typeof externalFunction === "function")
      externalFunction();
  };
  return (
    <a
      role="button"
      onClick={setState}
      className={css}
      aria-label="menu"
      aria-expanded="false"
      data-target="menu"
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  );
};

export default Hamburger;
