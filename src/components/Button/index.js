/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { NavLink as Link } from "react-router-dom";

const Button = props => (
 <Link
  className="button"
  style={{ fontFamily: "Oswald, sans-serif" }}
  {...props}
 />
);

export default Button;
