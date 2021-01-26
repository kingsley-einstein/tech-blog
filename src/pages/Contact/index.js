import React from "react";
import { Card } from "../../components";
import "./index.css";

const Contact = () => (
 <div className="container">
  <div className="marginize card-holder">
   <Card>
    <header className="card-header">
     <span className="card-header-title">Send a message!</span>
    </header>
    <div className="card-content">
     <div className="content">
      <form>
       <div className="field">
        <label className="label">Name</label>
        <div className="control has-icons-left">
         <input className="input" type="text" placeholder="Enter Name" />
         <span className="icon is-small is-left">
          <i className="fa fa-user"></i>
         </span>
        </div>
       </div>
       <div className="field">
        <label className="label">Email</label>
        <div className="control has-icons-left">
         <input
          className="input"
          type="email"
          placeholder="Enter Email Address"
         />
         <span className="icon is-small is-left">
          <i className="fa fa-envelope"></i>
         </span>
        </div>
       </div>
       <div className="field">
        <label className="label">Subject</label>
        <div className="control has-icons-left">
         <input
          className="input"
          type="email"
          placeholder="Enter Email Subject"
         />
         <span className="icon is-small is-left">
          <i className="fas fa-file"></i>
         </span>
        </div>
       </div>
       <div className="field">
        <label className="label">Message</label>
        <div className="control">
         <textarea className="textarea" placeholder="Enter Message"></textarea>
        </div>
       </div>
      </form>
     </div>
    </div>
   </Card>
  </div>
 </div>
);

export default Contact;
