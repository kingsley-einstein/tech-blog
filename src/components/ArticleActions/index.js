/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { v4 as uuid } from "uuid";
import * as api from "../../api";

const ArticleActions = ({ id }) => {
 const [isLiked, setIsLiked] = React.useState(false);
 const className = isLiked
  ? "button is-small is-link is-light p-1"
  : "button is-small is-white p-1";

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
    <a className="button is-small is-white p-1">
     <i className="fa fa-comment"></i>
    </a>
   </div>
  </div>
 );
};

export default ArticleActions;
