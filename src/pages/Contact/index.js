import React from "react";
import { Card } from "../../components";
import * as mail from "../../mail";
import "./index.css";

const Contact = () => {
 const [isLoading, setLoading] = React.useState(false);
 const [hasError, setError] = React.useState(false);
 const [errorMessage, setErrorMessage] = React.useState("");
 const [mailObj, setMail] = React.useState({
  from_name: "",
  from_email: "",
  subject: "",
  to_name: "Kingsley Victor",
  message: ""
 });

 const showErrorMessage = () => setError(true);
 const hideErrorMessage = () => setError(false);

 const setMailObj = e =>
  setMail({
   ...mailObj,
   [e.target.name]: e.target.value
  });

 // const setIsLoading = () => setLoading(!isLoading);

 const sendMail = async e => {
  e.preventDefault();
  setLoading(true);

  const res = await mail.send({ ...mailObj });

  if (res.status >= 400) {
   setErrorMessage(res.text);
   showErrorMessage();
   setLoading(false);
  }

  setMail({
   from_email: "",
   from_name: "",
   subject: "",
   to_name: "Kingsley Victor",
   message: ""
  });

  setLoading(false);

  // console.log(res);
 };

 const btnClass = isLoading
  ? "button is-success is-loading"
  : "button is-success";
 const isEnabled =
  mailObj.from_email.trim().length > 0 &&
  mailObj.from_name.trim().length > 0 &&
  mailObj.subject.trim().length > 0 &&
  mailObj.message.trim().length > 0;

 return (
  <div className="container">
   <div className="marginize card-holder">
    {hasError && (
     <article className="message is-danger">
      <div className="message-header">
       <p>Error</p>
       <button
        onClick={hideErrorMessage}
        className="delete"
        aria-label="delete"
       ></button>
      </div>
      <div className="message-body">{errorMessage}</div>
     </article>
    )}
    <Card>
     <header className="card-header">
      <span className="card-header-title">Send a message!</span>
     </header>
     <div className="card-content">
      <div className="content">
       <form onSubmit={sendMail}>
        <div className="field">
         <label className="label">Name</label>
         <div className="control has-icons-left">
          <input
           name="from_name"
           value={mailObj.from_name}
           onChange={setMailObj}
           className="input"
           type="text"
           placeholder="Enter Name"
          />
          <span className="icon is-small is-left">
           <i className="fa fa-user"></i>
          </span>
         </div>
        </div>
        <div className="field">
         <label className="label">Email</label>
         <div className="control has-icons-left">
          <input
           name="from_email"
           value={mailObj.from_email}
           onChange={setMailObj}
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
           name="subject"
           value={mailObj.subject}
           onChange={setMailObj}
           className="input"
           type="text"
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
          <textarea
           name="message"
           value={mailObj.message}
           onChange={setMailObj}
           className="textarea"
           placeholder="Enter Message"
          ></textarea>
         </div>
        </div>
        <div className="control">
         <button type="submit" disabled={!isEnabled} className={btnClass}>
          Send
         </button>
        </div>
       </form>
      </div>
     </div>
    </Card>
   </div>
  </div>
 );
};

export default Contact;
