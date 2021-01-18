import React from "react";
import "./index.css";

const Footer = () => (
 <footer className="footer marginized">
  <div className="content has-text-centered">
   <p>
    Made with <i className="fa fa-heart"></i> by{" "}
    <strong>Kingsley Victor</strong>. &copy; {new Date().getFullYear()}
   </p>
  </div>
 </footer>
);

export default Footer;
