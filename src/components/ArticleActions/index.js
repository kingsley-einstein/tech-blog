/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { v4 as uuid } from "uuid";
import * as api from "../../api";
import Modal from "../Modal";
// import Button from "../Button";
// import Panel from "../Panel";

const ArticleActions = ({ id }) => {
 const [isLiked, setIsLiked] = React.useState(false);
 const [modalShown, showModal] = React.useState(false);
 const className = isLiked
  ? "button is-small is-link is-light p-1"
  : "button is-small is-white p-1";
 const modalClass = modalShown ? "modal is-active" : "modal";

 const like = () => {
  // console.log(id, "=====");
  api
   .invoke("action", {
    id: uuid(),
    articleId: id,
    client: localStorage.getItem("Client_Id")
   })
   .then(console.log)
   .catch(console.error);
  setIsLiked(!isLiked);
 };

 const checkIfLiked = async () => {
  const res = await api.invoke("isLiked", {
   client: localStorage.getItem("Client_Id"),
   articleId: id
  });
  // console.log(res);
  setIsLiked(res.data);
 };

 const displayModal = () => showModal(!modalShown);
 const hideModal = () => showModal(false);

 React.useEffect(() => {
  checkIfLiked().then(() => console.log("Done!!"));
 });

 // const dislike = () => {
 //  console.log(id);
 // };
 return (
  <div className="container">
   <div className="has-text-left">
    <a onClick={like} className={className}>
     <i className="fa fa-thumbs-up"></i>
    </a>
    {/* <a onClick={dislike} className="button is-white p-1">
     <i className="fa fa-thumbs-down"></i>
    </a> */}
    <a onClick={displayModal} className="button is-small is-white p-1">
     <i className="fa fa-comment"></i>
    </a>
   </div>
   <Modal className={modalClass}>
    <div className="modal-background"></div>
    <div className="modal-content">
     <div className="modal-card">
      <header className="modal-card-head">
       <p className="modal-card-title">Drop comment!</p>
       <button
        onClick={hideModal}
        className="delete"
        aria-label="close"
       ></button>
      </header>
      <section className="modal-card-body">
       <div>
        <textarea className="textarea" placeholder="Enter Comment"></textarea>
        {/* <Panel>
       <p className="panel-heading is-primary">Drop comment!</p>
       <div className="panel-block is-active">
       </div>
      </Panel> */}
       </div>
      </section>
      <footer className="modal-card-foot">
       <button className="button is-success">Add Comment</button>
      </footer>
     </div>
    </div>
    {/* <button onClick={hideModal} className="modal-close is-large"></button> */}
   </Modal>
  </div>
 );
};

export default ArticleActions;
